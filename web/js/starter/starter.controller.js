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
            return GetTeamDetails.getTeamNames().then(function (teamsList) {
                vm.teams = teamsList.teams;
                console.log(vm.teams);
            });
        }


        vm.register = function () {
            //var userdetails = registerUser.manageUser(vm.user);
            console.log('userdetails :: ', vm.user);
            console.log('Name :: ', vm.user.name);
        };


        function init() {
            vm.user = registerUser.newUser();
            vm.teams = getTeams();
        }

    }

}());