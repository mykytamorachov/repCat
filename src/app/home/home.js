/**
 * Each section of the site has its own module. It probably also has
 * submodules, though this boilerplate is too simple to demonstrate it. Within
 * `src/app/home`, however, could exist several additional folders representing
 * additional modules that would then be listed as dependencies of this one.
 * For example, a `note` section could have the submodules `note.create`,
 * `note.delete`, `note.edit`, etc.
 *
 * Regardless, so long as dependencies are managed correctly, the build process
 * will automatically take take of the rest.
 *
 * The dependencies block here is also where component dependencies should be
 * specified, as shown below.
 */
angular.module('repCat.home')





/**
 * And of course we define a controller for our route.
 */
.controller('HomeCtrl', function HomeController($scope, $http, repoService,localStorageService) {
    repoService.getRepos(function(data) {
        $scope.repositories = data;
        $scope.itemsPerPage = 10;
        $scope.currentPage = 0;
        $scope.bindFavorites = localStorageService.bind($scope, 'isFavorites');
        $scope.pageCount = function() {
            return new Array(Math.ceil($scope.repositories.length / $scope.itemsPerPage) - 1);
        };
        $scope.prevPage = function() {
            if ($scope.currentPage > 0) {
                $scope.currentPage--;
            }
        };

        $scope.prevPageDisabled = function() {
            return $scope.currentPage === 0 ? "disabled" : "";
        };

        $scope.setPage = function(index) {
            $scope.currentPage = index;
        };

        $scope.nextPage = function() {
            if ($scope.currentPage < $scope.pageCount().length - 1) {
                $scope.currentPage++;
            }
        };

        $scope.nextPageDisabled = function() {
            return $scope.currentPage === $scope.pageCount().length - 1 ? "disabled" : "";
        };
    });

    $scope.makeFavourite = function(index) {
        $scope.isFavorites = [];
        $scope.isFavorites.push($scope.repositories[index]);

    };
    $scope.reverse = function() {
        $scope.repositories = angular.copy($scope.repositories.reverse());
    };
    $scope.predicate = 'id';
    $scope.reverse = false;
    $scope.order = function(predicate) {
        $scope.reverse = ($scope.predicate === predicate) ? !$scope.reverse : false;
        $scope.predicate = predicate;
    };

})

;