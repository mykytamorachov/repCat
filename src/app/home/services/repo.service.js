angular.module('repCat.home')

.factory('repoService', ['$http',
    function($http) {

        var getRepos = function(cb) {
            $http({
                method: "GET",
                url: 'https://api.github.com/repositories',
                params: {
                    per_page: 20
                }
            }).
            success(function(data, status, headers, config) {
                cb(data);
            }).
            error(function(data, status, headers, config) {
                alert(data);
                // called asynchronously if an error occurs
                // or server returns response with an error status.
            });
        };

        return {
        	getRepos: getRepos
        };
    }
]);