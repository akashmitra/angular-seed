(function () {
    'use strict';

    angular
        .module('starterapp')
        .controller('JediController', JediController);

    function JediController($scope) {
        var vm = $scope;
        vm.title = "JEDI";
    }

})();