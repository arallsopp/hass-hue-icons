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

                $scope.externalLibrary = params.get('library');
                $scope.mapName = params.get('map');
                $scope.loadExternalLibrary();

            }else{
                console.log('using default library');
                $scope.externalLibrary = false;
                $scope.importFromScript();
            }
        };

        $scope.updateSearchTerm = function(text){
            $scope.searchTerm = text;
        };

        $scope.loadExternalLibrary = function(){

            var scriptEl = document.createElement('script');

            console.log('starting');

            scriptEl.setAttribute('src', $scope.externalLibrary);
            scriptEl.setAttribute('type','text/javascript');
            scriptEl.onload = function($scope){
                var scope = angular.element(document.querySelector('#outer')).scope();
                scope.$apply(function(){
                    scope.importFromVariableScript();
                });
            };
            document.head.appendChild(scriptEl);
        };

        $scope.importFromVariableScript = function() {
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


