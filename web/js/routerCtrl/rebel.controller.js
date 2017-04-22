(function () {
    'use strict';

    angular
        .module('starterapp')
        .controller('RebelController', RebelController);

    function RebelController($scope) {
        var vm = $scope;
        vm.title = "REBEL";
    }

})();