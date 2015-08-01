(function() {
  'use strict';

  angular
    .module('johnthillaye')
    .controller('MainController', MainController);
  
  /** @ngInject */
  function MainController($scope, $route) {
    //stuff
    $scope.title = "Hello MOTO";

    console.log($route);
  }
})();
