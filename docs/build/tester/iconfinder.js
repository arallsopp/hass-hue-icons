"use strict";
var app = angular.module("aaIconFinder", ['ngMaterial', 'ngMessages']);

app.controller('AppCtrl', ['$scope', '$http','$mdToast',
    function($scope, $http, $mdToast) {
        $scope.searchTerm = '';
        $scope.supportedLibraries = [{
            name: 'bha-icons',
            url: 'https://cdn.jsdelivr.net/gh/hulkhaugen/hass-bha-icons/dist/hass-bha-icons.js',
            author: 'hulkhaugen',
            repo: 'https://github.com/hulkhaugen/hass-bha-icons'
        }, {
            name: 'crypto-icons',
            url: 'https://cdn.jsdelivr.net/gh/GH2user/hass-crypto-icons/dist/hass-crypto-icons.js',
            author: 'GH2user',
            repo: 'https://github.com/GH2user/hass-crypto-icons'
        }, {
            name: 'custom-icons',
            url: 'https://cdn.jsdelivr.net/gh/Mariusthvdb/custom-icons/custom-icons.js',
            author: 'Mariusthvdb',
            repo: 'https://github.com/Mariusthvdb/custom-icons'
        }];
        $scope.activeExternalLibrary = false;

        $scope.init = function () {
            $scope.parseURLParams();
        };

        // set up current icon if provided
        $scope.parseURLParams = function () {
            let params = new URLSearchParams(document.location.search);
            $scope.searchTerm = params.get('search')
                ? params.get('search')
                : '';

            if (params.get('library')) {
                console.log('loading external library');

                $scope.externalLibrary = params.get('library');
                $scope.activeExternalLibrary = $scope.supportedLibraries.find(lib => lib.url == $scope.externalLibrary);

                $scope.loadExternalIconLibrary();

            } else {
                console.log('using default library');
                $scope.externalLibrary = false;
                $scope.importFromScript();
            }
        };

        $scope.copyDirectLink = function () {
            let url = new URL(window.location.toString()),
                params = new URLSearchParams(url.search);
            if (params.get('search')) {
                params.set('search', $scope.searchTerm)
            } else {
                params.append('search', $scope.searchTerm);
            }

            $scope.copyToClipboard(url.origin + url.pathname + '?' + params.toString(), 'Link copied to clipboard')
        };

        $scope.copyToClipboard = function (content, msg) {
            let copyElement = document.createElement("textarea");
            copyElement.style.position = 'fixed';
            copyElement.style.opacity = '0';
            copyElement.textContent = (content);

            let body = document.getElementsByTagName('body')[0];
            body.appendChild(copyElement);
            copyElement.select();
            document.execCommand('copy');
            body.removeChild(copyElement);

            $scope.showToast(typeof (msg) === "undefined" ? 'Copied to clipboard' : msg);
        };

        $scope.showToast = function (message) {
            $mdToast.show(
                $mdToast.simple()
                    .textContent(message)
                    .hideDelay(3000))
                .then(function () {
                    // Toast dismissed.
                }).catch(function () {
                //toast failed or got closed over
            });
        };


        $scope.updateSearchTerm = function (text) {
            $scope.searchTerm = text;
        };

        $scope.loadExternalIconLibrary = function () {

            var scriptEl = document.createElement('script');
            console.log('starting');

            scriptEl.setAttribute('src', $scope.externalLibrary);
            scriptEl.setAttribute('type', 'text/javascript');
            scriptEl.onload = function ($scope) {
                var scope = angular.element(document.querySelector('#outer')).scope();
                scope.$apply(function () {
                    scope.importFromScript();
                });
            };
            document.head.appendChild(scriptEl);
        };

        $scope.importFromScript = function () {
            console.log('importing!');

            //new method for getting icons back, without knowing the name of the map
            $scope.icons = [];
            let icon_list = getIconList(); // is a promise
            icon_list.then(function(my_list){
                for(const icon in my_list){
                    let this_icon = getIcon(my_list[icon].name); //is a promise
                    this_icon.then(function(my_icon){
                        console.log('adding', my_list[icon].name);
                        let keywords = my_list[icon].keywords,
                            aliases = keywords
                                ? keywords.join(', ')
                                : '';

                        $scope.icons.push({
                            name:my_list[icon].name,
                            path: my_icon.path,
                            keywords:keywords,
                            aliases: aliases,
                            value: ('hue:' + my_list[icon].name + ' ' + aliases).toLowerCase()
                        });
                        $scope.$applyAsync();
                    })
                }
            });
        };


        /**
         * Create filter function for a query string
         */
        $scope.matchesSearchTerm = function (icon) {
            if (!$scope.searchTerm) {
                return true;
            } else {
                let searchTerms = $scope.searchTerm.toLowerCase().split(' ');

                for (let i = 0; i < searchTerms.length; i++) {
                    if (icon.value.indexOf(searchTerms[i]) !== -1) return true;
                }
            }
        };

        $scope.openMenu = function ($mdMenu, ev) {
            $mdMenu.open(ev);
        };

        $scope.newWindow = function (library) {
            if (typeof library === "undefined"){
                window.open('iconfinder.html');
            }else{
            window.open('iconfinder.html?library=' + library.url);
            }
        }

        $scope.init();
    }
]);


