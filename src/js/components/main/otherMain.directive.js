(function() {

  'use strict';

  angular.module('shoppingCartApp.components.main')
    .directive('cdOther', otherMainDirective);

  otherMainDirective.$inject = [];

  function otherMainDirective () {
    return {
      scope: {},
      restrict: 'E',
      controller: 'mainController',
      controllerAs: 'vm',
      templateUrl: './js/components/main/otherMain.html'
    };
  }
})();
