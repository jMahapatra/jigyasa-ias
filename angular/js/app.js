let app = angular.module('jigyasa', ['ngRoute', 'ngCookies'])

app.config(function($routeProvider, $locationProvider){
    $routeProvider
    .when('/', {
        templateUrl: 'views/main.html',
        controller: 'mainController'
    })
    .when('/sign-in', {
        controller: 'SigninController',
        templateUrl: 'views/sign-in.html',
        controllerAs: 'vm'
    })
    .when('/register', {
        templateUrl: 'views/register.html'
    })
    .when('/about-ias', {
        templateUrl: 'views/about-ias.html'
    })
    .when('/prelims', {
        templateUrl: 'views/ias-prelims.html'
    })
    .when('/mains', {
        templateUrl: 'views/ias-mains.html'
    })
    .when('/interview', {
        templateUrl: 'views/about-interview.html'
    })
    .when('/latest-updates', {
        templateUrl: 'views/latest-updates.html',
    })
    .when('/downloads', {
        templateUrl: 'views/downloads.html',
    })
    .when('/essential-books-prelims', {
        templateUrl: 'views/essential-books-prelims.html',
    })
    .when('/current-affairs', {
        templateUrl: 'views/current-affairs.html',
    })
    .when('/current-affairs-full', {
        templateUrl: 'views/current-affairs-full.html',
    })
    .when('/article', {
        templateUrl: 'views/article.html',
    })
    .when('/article-full', {
        templateUrl: 'views/article-full.html',
        // resolve: {
        //     data: function($timeout){
        //         $timeout('', 2000);
        //     }
        // }
    })
    .when('/answer-writing-platform', {
        templateUrl: 'views/answer-writing-platform.html',
    })
    .when('/answer-writing-full', {
        templateUrl: 'views/answer-writing-full.html',
    })
    .when('/daily-study-plan', {
        templateUrl: 'views/daily-study-plan.html',
    })
    .when('/daily-study-guidelines', {
        templateUrl: 'views/daily-study-guidelines.html',
    })
    .when('/daily-quiz', {
        templateUrl: 'views/daily-quiz.html',
    })
    .when('/prelims-test-series', {
        templateUrl: 'views/prelims-test-series.html',
    })
    .when('/package-detail', {
        templateUrl: 'views/package-detail.html',
    })
    .when('/feedback', {
        templateUrl: 'views/feedback.html',
    })
    .when('/faq', {
        templateUrl: 'views/faq.html',
    })
    .when('/chat-with-us', {
        templateUrl: 'views/chat-with-us.html',
    })
    .when('/contact-us', {
        templateUrl: 'views/contact-us.html',
    })
    .when('/sign-in', {
        templateUrl: 'views/sign-in.html',
    })
    .when('/sign-up', {
        templateUrl: 'views/sign-up.html',
    })

})

app.controller('mainController', function($scope, $http, $log){
    $scope.downloads = []
    $http.get(API_DIR + 'main/download').then(function(response){
        $scope.downloads = response.data;
        $log.info(response);
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
