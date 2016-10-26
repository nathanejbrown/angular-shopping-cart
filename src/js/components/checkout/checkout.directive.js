(function() {

  'use strict';

  angular.module('shoppingCartApp.components.main')
    .directive('cdCheckout', checkoutDirective);

  checkoutDirective.$inject = [];

  function checkoutDirective () {
    return {
      scope: {},
      restrict: 'E',
      controller: 'mainController',
      controllerAs: 'vm',
      templateUrl: './js/components/checkout/checkout.html'
    };
  }
})();
