angular.module( 'repCat.catalogues', [
  'ui.router',
  // 'placeholders',
  'ui.bootstrap'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'catalogues', {
    url: '/catalogues',
    views: {
      "main": {
        controller: 'CataloguesCtrl',
        templateUrl: 'catalogues/catalogues.tpl.html'
      }
    },
    data:{ pageTitle: 'What is It?' }
  });
})

.controller( 'CataloguesCtrl', function CataloguesCtrl( $scope ) {
  // This is simple a demo for UI Boostrap.
  $scope.dropdownDemoItems = [
    "The first choice!",
    "And another choice for you.",
    "but wait! A third!"
  ];
})

;
