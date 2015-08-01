(function() {
  'use strict';

  angular
    .module('johnthillaye')
    .controller('AboutController', AboutController);
	
  /** @ngInject */
  function AboutController ($scope) {

    $scope.title = "Hello M";
  }
})();
