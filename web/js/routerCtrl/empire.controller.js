(function () {
    'use strict';

    angular
        .module('starterapp')
        .controller('EmpireController', EmpireController);

    function EmpireController($scope) {
        var vm = $scope;
        vm.title = "EMPIRE";
    }

})();