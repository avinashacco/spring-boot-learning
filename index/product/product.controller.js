(function () {
  'use strict';

  angular
    .module('CiModule')
    .controller('ProductController', ProductController);

  ProductController.$inject = ['ProductService'];
  function ProductController(ProductService) {
    var vm = this;

    ////////////////

    (function init() {

      vm.allProducts = ProductService.getProducts();
      vm.totalItems = vm.allProducts.length;
      if(vm.totalItems > 0 ) {
        vm.currentPage = 1;
      }
      getPage();
    })();

    function getPage() {
      vm.products = vm.allProducts.slice(((vm.currentPage - 1) * 10) +1, 
      (vm.currentPage) * 10);
    }

  }
})();
