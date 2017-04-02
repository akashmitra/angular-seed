(function () {
    'use strict';

    angular.module('starterapp')
        .service('GetPeople', GetPeople);

    function GetPeople() {
        this.getSomePeople = function () {
            return ["Akash", "Ashish", "Amit"];
        };
    }
}());