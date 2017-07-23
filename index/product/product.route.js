
angular.module('CiModule').config(function($stateProvider) {
  $stateProvider
    .state('products', {
      url: "",
      templateUrl: "product/product.html",
      controller: "ProductController",
      controllerAs: "pc"
    }).state('doc', {
      url: "/doc/:id",
      templateUrl: "product/productDoc.html",
      controller: "ProductDocController",
      controllerAs: "pdc"
    });
});

