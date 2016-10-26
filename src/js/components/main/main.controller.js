(function() {

  'use strict';

  angular.module('shoppingCartApp.components.main', [])
    .controller('mainController', mainController);

  mainController.$inject = ['MainService', '$rootScope'];

  function mainController(MainService, $rootScope) {
    /*jshint validthis: true */
    this.data = MainService.data;
    this.allCategories = [];
    $rootScope.cart = [];
    $rootScope.subtotal = 0;
    $rootScope.tax = 0;
    $rootScope.total = 0;
    $rootScope.sortBy = '';
    $rootScope.searchFor = '';

    this.data.forEach(tea => {
      tea.categories.forEach(category => {
        if (this.allCategories.indexOf(category) === -1) {
          this.allCategories.push(category);
        }
      });
    });

    this.addToCart = function (num, item) {
      $rootScope.subtotal += (item.price * num);
      $rootScope.tax = ($rootScope.subtotal * 0.0816);
      $rootScope.total = ($rootScope.subtotal + $rootScope.tax);
      for (let x = 0; x < num; x++) {
        if ($rootScope.cart.indexOf(item) === -1) {
          item.quantity = 1;
          $rootScope.cart.push(item);
        } else {
          $rootScope.cart[$rootScope.cart.indexOf(item)].quantity++;
        }
      }
      console.log($rootScope.cart);
    };
  }

})();
