let app = angular.module('jigyasa', ['ngRoute'])

app.config(function($routeProvider){
    $routeProvider
    .when('/', {
        templateUrl: 'views/main.html'
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
        templateUrl: 'views/interview.html'
    })
    .when('/recent-updates', {
        templateUrl: 'views/recent-updates.html',
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
    })
    .when('/answer-writing-platform', {
        templateUrl: 'views/answer-writing-platform.html',
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
