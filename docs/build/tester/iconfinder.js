"use strict";
var app = angular.module("aaIconFinder", ['ngMaterial', 'ngMessages']);

app.controller('AppCtrl', ['$scope', '$http','$mdToast',
    function($scope, $http, $mdToast) {
        $scope.searchTerm = '';


        $scope.init = function(){
            $scope.setupSearchTerms();
            $scope.importFromScript();
        }

        // set up current icon if provided
        $scope.setupSearchTerms = function() {
            let params = new URLSearchParams(document.location.search);
            $scope.searchTerm = params.get('search')
                ? params.get('search')
                : '';
        }

        $scope.importFromScript = function() {
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
                return (icon.value.indexOf($scope.searchTerm.toLowerCase()) !== -1);
            }
        }

        $scope.init();
    }
]);


