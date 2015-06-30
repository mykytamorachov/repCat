angular.module('repCat.home', [
    'ui.router',
    'LocalStorageModule'
])
/**
 * Each section or module of the site can also have its own routes. AngularJS
 * will handle ensuring they are all available at run-time, but splitting it
 * this way makes each module more "self-contained".
 */
.config(function config($stateProvider) {
    $stateProvider.state('home', {
        url: '/home',
        views: {
            "main": {
                controller: 'HomeCtrl',
                templateUrl: 'home/home.tpl.html'
            }
        },
        data: {
            pageTitle: 'Home'
        }
    });
})
.config(function (localStorageServiceProvider) {
  localStorageServiceProvider
    .setPrefix('regCat')
    .setNotify(true, true);
});