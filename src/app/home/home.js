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
angular.module('repCat.home', [
    'ui.router',
    'plusOne',
    'pascalprecht.github-adapter'
])
    .constant("myConfig", {
        "url": "https://api.github.com/",
        "oAuthToken": "81ef23d77111610ea4a52c4ed13505c7980a678f",
        "gitHubUsername":"mykytamorachov"
    })

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
.config(function ($githubProvider, myConfig) {
  $githubProvider.token(myConfig.oAuthToken);
  $githubProvider.authType('oauth');
})

/**
 * And of course we define a controller for our route.
 */
.controller('HomeCtrl', function HomeController($scope, $http, $github, myConfig) {
  var github = new Github({
    token: myConfig.oAuthToken,
    auth: "oauth"
  });
  var repo = github.getRepo("mykytamorachov", "repCat");
  repo.show(function(err, repo) {
    console.log(repo);
  });

    // $http({
    //     method: 'GET',
    //     url: 'https://api.github.com/mykytamorachov/repos',
    //     headers:{
    //       'Authorization':'Basic bXlreXRhbW9yYWNob3Y6RHJlYWQxMDA3OTA='
    //     }
    // }).
    // success(function(data, status, headers, config) {
    //     console.log(data);
    //     // this callback will be called asynchronously
    //     // when the response is available
    // }).
    // error(function(data, status, headers, config) {
    //     alert(data);
    //     // called asynchronously if an error occurs
    //     // or server returns response with an error status.
    // });
})

;