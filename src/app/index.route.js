(function() {
  'use strict';

  angular
    .module('johnthillaye')
    .config(routeConfig);
  
  /** @ngInject */
  function routeConfig($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main',
        title: 'My app'
      })
      .when('/about', {
        templateUrl: 'app/about/about.html',
        controller: 'AboutController',
        controllerAs: 'about',
        title: 'About page'
      })
      .otherwise({
        redirectTo: '/'
      });
  }

})();
