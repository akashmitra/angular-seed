(function () {
    'use strict';

    angular.module('starterapp')
        .directive('myHeader', myHeader)
        .directive('someAction', someAction)
        .directive('heavyAction', heavyAction)
        .directive('myForm', myForm);

    function myHeader() {
        return {
            restrict: 'E',
            template: '<h1>Welcome to AngularJS</h1>'
        };
    }

    function someAction() {
        return {
            restrict: 'AE',
            template: '<input type="text" ng-model="surname"/><button ng-click="clickAction()">Click Me</button>',
            link: function (scope, elem, attrs) {
                console.log('Name Attribute :: ' + attrs.name);

                scope.clickAction = function () {
                    console.log('Surname Model :: ' + scope.surname);
                };

            }
        };

    }

    function heavyAction() {
        return {
            restrict: 'AE',
            templateUrl: 'pages/heavyaction.html',
            controller: function ($scope) {
                console.log('Surname :: ', $scope.surname);
                $scope.clickAction = function () {
                    console.log('Surname Model :: ' + $scope.surname);
                };
            }
        };
    }

    function myForm() {
        return {
            restrict: 'E',
            templateUrl: 'pages/forms.html',
            controller:
            function ($scope, students, GetPeople) {
                var vm = $scope;
                vm.student = students.createStudents();
                console.log('New Student :: ', vm.student);
                vm.peoples = GetPeople.getSomePeople();

                vm.submitStudent = function () {
                    console.log('The student is :: ', vm.student);
                };

            }
        };
    }


}());