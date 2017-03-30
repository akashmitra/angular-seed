(function () {
    'use strict';
    angular.module('starterapp')
        .factory('fetchTeams', fetchTeams);

    // fetchTeams.$inject = ['$http'];

    function fetchTeams($http) {
        return {
            getTeams: getTeams
        };

        function getTeams() {
            return $http.get('http://localhost:3000/teams')
                .then(getTeamSuccess)
                .catch(getTeamFailed);

            function getTeamSuccess(response) {
                return response.teams;
            }

            function getTeamFailed(error) {
                logger.error('XHR Failed for getTeams.' + error.data);
            }
        }
    }

}());