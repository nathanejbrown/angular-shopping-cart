(function() {

  'use strict';

  angular.module('shoppingCartApp.components.main')
    .directive('cdMain', MainDirective);

  MainDirective.$inject = [];

  function MainDirective () {
    return {
      scope: {},
      restrict: 'E',
      controller: 'mainController',
      controllerAs: 'vm',
      templateUrl: './js/components/main/main.html'
    };
  }
})();
