"use strict";
var app = angular.module("tester", ['ngMaterial', 'ngMessages']);

app.controller('AppCtrl', ['$scope', '$http','$mdToast',
    function($scope, $http, $mdToast) {
        $scope.message = 'hello world';
    }
]);
