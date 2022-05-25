"use strict";
var app = angular.module("aaIconFinder", ['ngMaterial', 'ngMessages']);

app.controller('AppCtrl', ['$scope', '$http','$mdToast',
    function($scope, $http, $mdToast) {
        $scope.searchTerm = '';

        $scope.init = function(){
            $scope.parseURLParams();
        };

        // set up current icon if provided
        $scope.parseURLParams = function() {
            let params = new URLSearchParams(document.location.search);
            $scope.searchTerm = params.get('search')
                ? params.get('search')
                : '';

            if(params.get('library')){
                console.log('loading external library');
                $scope.mapName = params.get('map');
                $scope.loadLibrary('https://mariusthvdb.github.io/custom-icons/custom-icons.js');
            }else{
                console.log('using default library');
                $scope.mapName = 'HUE_ICONS_MAP';
                $scope.importFromScript();
            }
        };

        $scope.updateSearchTerm = function(text){
            $scope.searchTerm = text;
        };

        $scope.loadLibrary = function(url){

            var scriptEl = document.createElement('script');

            console.log('starting');

            scriptEl.setAttribute('src', url);
            scriptEl.setAttribute('type','text/javascript');
            scriptEl.onload = function($scope){
                var scope = angular.element(document.querySelector('#outer')).scope();
                scope.$apply(function(){
                    scope.importFromScript();
                });
            };
            document.head.appendChild(scriptEl);
        };

        $scope.importFromScript = function() {
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
        }


        /**
         * Create filter function for a query string
         */
        $scope.matchesSearchTerm = function(icon){
            if(!$scope.searchTerm){
                return true;
            }else {
                let searchTerms = $scope.searchTerm.toLowerCase().split(' ');

                for(let i=0;i<searchTerms.length;i++){
                    if (icon.value.indexOf(searchTerms[i]) !== -1) return true;
                }
            }
        }

        $scope.init();
    }
]);


