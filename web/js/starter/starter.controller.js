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

    function StarterCtrl($scope, GetPeople) {
        var vm = $scope;
        vm.title = "Hello World Again!";
        vm.myName = "Akash";

        vm.sayHello = function () {
            console.log('Say Hello!');
        };

        vm.twoWayBindEg = function () {
            console.log('Hello Mr', vm.user);
        };

        vm.peoples = GetPeople.getSomePeople();
        
        // vm.peoples = ["Akash", "Ashish", "Amit"];

    }

}());