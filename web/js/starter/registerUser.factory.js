(function () {
    'use strict';

    angular.module('starterapp')
        .factory('registerUser', registerUser);

    function registerUser() {

        var registeruser = {
            name: null,
            empid: null,
            team: null
        };

        return {
            getUser: function () {
                return registeruser;
            },
            setUser: function (user) {
                registeruser = {
                    name: user.name || null,
                    empid: user.empid || null,
                    team: user.team || null
                };
                return registeruser;
            }
        };

    }

}());