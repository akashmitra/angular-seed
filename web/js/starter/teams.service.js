(function () {
    'use strict';
    angular.module('starterapp')
        .service('GetTeamDetails', GetTeamDetails);

    function GetTeamDetails(fetchTeams) {

        this.getTeamNames = function () {
            return fetchTeams.getTeams()
                .then(function (data) {
                    return data;
                })
                .catch(function (error) {
                    console.log('XHR Failed for getTeams.' + error.data);
                });

        };

    }

}());


// return [
            //     {
            //         name: "Wright Express Corporation",
            //         id: "WEX"
            //     },
            //     {
            //         name: "Wyndham Destination Network",
            //         id: "WDN"
            //     },
            //     {
            //         name: "Wyndham Vacation Ownership",
            //         id: "WVO"
            //     }
            // ];