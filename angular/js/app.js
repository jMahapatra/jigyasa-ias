let app = angular.module('jigyasa', ['ngRoute'])

app.config(function($routeProvider){
    $routeProvider
    .when('/', {
        templateUrl: 'views/main.html'
    })
    .when('/current-affairs', {
        templateUrl: 'views/current-affairs.html',
    })
    .when('/prelims-test-series', {
        templateUrl: 'views/prelims-test-series.html',
    })
    .when('/package-detail', {
        templateUrl: 'views/package-detail.html',
    })


})

// app.controller('addCustomer', function($scope, $http){
//     $scope.customer = {}
//     $scope.message = "";

//     $scope.save = function(){
//         $http.post(API_DIR + 'customer/add', $scope.customer).then(function(response){
//             $scope.message = "Saved Successfully";
//             $scope.customer = {}
//         })
//     }
// })
