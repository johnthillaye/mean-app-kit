(function() {
  'use strict';

  angular
    .module('johnthillaye')
    .config(config)
    .run(onRouteChange);

  /** @ngInject */
  function config($logProvider, $locationProvider) {
    // Enable log
    $logProvider.debugEnabled(true);

    //HTML5 Routing
    $locationProvider.html5Mode(true);

  }
  
  /** @ngInject */
  function onRouteChange($rootScope, $route) {
    $rootScope.$on('$routeChangeSuccess', function() {
        document.title = $route.current.title;
    });
  }

})();
