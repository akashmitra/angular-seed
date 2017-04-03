(function () {
    'use strict';
    angular.module('starterapp')
        .factory('fetchTeams', fetchTeams);

    fetchTeams.$inject = ['$http'];

    function fetchTeams($http) {
        return {
            getTeams: getTeams
        };

        function getTeams() {
            return $http.get('http://localhost:3000/db')
                .then(getTeamSuccess)
                .catch(getTeamFailed);

            function getTeamSuccess(response) {
                return response.data;
            }

            function getTeamFailed(error) {
                console.log('XHR Failed for getTeams.' + error.data);
            }
        }
    }

}());