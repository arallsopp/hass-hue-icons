(function () {
    'use strict';
    angular
        .module('MyApp', ['ngMaterial', 'ngMessages'])
        .controller('DemoCtrl', DemoCtrl);

    function DemoCtrl ($scope, $q, $log) {

        var self = this;

        self.icons = importFromScript();
        self.querySearch   = querySearch;
        self.selectedItemChange = selectedItemChange;
        self.searchTextChange   = searchTextChange;

        // set up current icon if provided
        let params = new URLSearchParams(document.location.search);
        $scope.selectedIcon = params.get('search')
           ? self.icons.filter(createFilterFor(params.get('search')))[0]
           : false;


        // ******************************
        // Internal methods
        // ******************************

        /**
         * Search for icons.
         */
        function querySearch (query) {
            let results = query ? self.icons.filter(createFilterFor(query)) : self.icons;
            return results;
        }

        function searchTextChange(text) {
            $log.info('Text changed to ' + text);
        }

        function selectedItemChange(item) {
            $log.info('Item changed to ' + JSON.stringify(item));
            $scope.selectedIcon = item;
        }

        /**
         * Build `components` list of key/value pairs
         */
        function importFromScript() {
            let icons = [];
            for (const icon in HUE_ICONS_MAP){

                let keywords = HUE_ICONS_MAP[icon].keywords,
                    aliases = keywords.join(', ');

                icons.push({
                    name: icon,
                    path:HUE_ICONS_MAP[icon].path,
                    keywords:keywords,
                    aliases:aliases,
                    value:'hue:' + icon + ' ' + aliases.toLowerCase()
                });
            }
            return icons;
        }

        /**
         * Create filter function for a query string
         */
        function createFilterFor(query) {
            var lowercaseQuery = query.toLowerCase();

            return function filterFn(item) {
                return (item.value.indexOf(lowercaseQuery) != -1);
            };

        }
    }
})();


