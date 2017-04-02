(function () {
    'use strict';

    angular.module('starterapp')
        .factory('students', students);

    function students() {
        return {
            createStudents: createStudents
        };

        function createStudents() {
            return {
                name: null,
                school: null
            };
        }


    }

}());