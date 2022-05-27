"use strict";
var app = angular.module("aaIconFinder", ['ngMaterial', 'ngMessages']);

app.controller('AppCtrl', ['$scope', '$http','$mdToast',
    function($scope, $http, $mdToast) {
        $scope.searchTerm = '';
        $scope.supportedLibraries = [{
            name: 'bha-icons',
            url: 'https://cdn.jsdelivr.net/gh/hulkhaugen/hass-bha-icons/dist/hass-bha-icons.js',
            map: 'BHA_ICONS_MAP',
            author: 'hulkhaugen',
            repo: 'https://github.com/hulkhaugen/hass-bha-icons'
        }, {
            name: 'crypto-icons',
            url: 'https://cdn.jsdelivr.net/gh/GH2user/hass-crypto-icons/dist/hass-crypto-icons.js',
            map: 'CRYPTO_ICONS_MAP',
            author: 'GH2user',
            repo: 'https://github.com/GH2user/hass-crypto-icons'
        }, {
            name: 'custom-icons',
            url: 'https://cdn.jsdelivr.net/gh/Mariusthvdb/custom-icons/custom-icons.js',
            map: 'CUSTOM_ICONS_MAP',
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
                $scope.mapName = params.get('map');

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
                    scope.importFromVariableScript();
                });
            };
            document.head.appendChild(scriptEl);
        };

        $scope.importFromVariableScript = function () {
            /* BASED ON scope.importFromScript which is neater */
            console.log('importing from variable script');

            let icons = [];
            for (const icon in eval($scope.mapName)) {
                let keywords = eval($scope.mapName)[icon].keywords,
                    aliases = keywords
                        ? keywords.join(', ')
                        : '',
                    path_prop = eval($scope.mapName)[icon].path,
                    path = path_prop
                        ? path_prop
                        : eval($scope.mapName)[icon];

                icons.push({
                    name: icon,
                    path: path,
                    keywords: keywords,
                    aliases: aliases,
                    value: icon + ' ' + aliases.toLowerCase()
                });
            }
            $scope.icons = icons;
        };


        $scope.importFromScript = function () {
            console.log('importing!');
            let icons = [];
            for (const icon in HUE_ICONS_MAP) {
                let keywords = HUE_ICONS_MAP[icon].keywords,
                    aliases = keywords.join(', ');

                icons.push({
                    name: icon,
                    path: HUE_ICONS_MAP[icon].path,
                    keywords: keywords,
                    aliases: aliases,
                    value: 'hue:' + icon + ' ' + aliases.toLowerCase()
                });
            }
            $scope.icons = icons;
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
            window.open('iconfinder.html?library=' + library.url + '&map=' + library.map);
            }
        }

        $scope.init();
    }
]);


