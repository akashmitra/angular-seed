(function () {
    'use strict';

    angular.module('starterapp')
        .config(starterAppConfiguration);

    function starterAppConfiguration($routeProvider) {
        $routeProvider
            .when('/jedi', {
                url: '/jedi',
                templateUrl: "pages/jedi.html",
                controller: "JediController"
            })
            .when('/rebel', {
                url: '/rebel',
                templateUrl: "pages/rebel.html",
                controller: "RebelController"
            })
            .when('/empire', {
                url: '/empire',
                templateUrl: "pages/empire.html",
                controller: "EmpireController"
            })
            .otherwise({
                redirectTo: '/jedi'
            });
    }

}());