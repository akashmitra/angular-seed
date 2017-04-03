(function () {
    'use strict';

    angular.module('starterapp')
        .factory('registerUser', registerUser);

    function registerUser() {
        return {
            newUser: newUser
        };

        function newUser() {
            var user = {
                name: null,
                empid: null,
                team: null
            };
            return user;
        }
    }

}());