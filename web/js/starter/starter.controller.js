(function () {
    'use strict';

    /*
    var app = angular.module('starterapp', []);

    app.controller('starterCtrl',['$scope', function ($scope) {
        $scope.title = "Hello World";
    }]);
    */

    angular.module('starterapp')
        .controller('StarterCtrl', StarterCtrl);

    function StarterCtrl($scope, registerUser, GetTeamDetails) {
        var vm = $scope;
        vm.title = "Hello World Again!";
        vm.myName = "Akash";
        vm.peoples = ["Akash", "Ashish", "Amit"];

        init();

        // vm.twoWayBindEg = function () {
        //     console.log('Hello Mr', vm.user);
        // };


        function getTeams() {
            vm.teams = GetTeamDetails.getTeamNames();
            console.log(vm.teams);
        }

        vm.register = function () {
            var userdetails = registerUser.setUser(vm.user);
            console.log('userdetails :: ', userdetails);
        };


        function init() {
            getTeams();
        }

    }

}());