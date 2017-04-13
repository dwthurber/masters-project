(function($){
  $(function(){

    $('.button-collapse').sideNav();

  }); // end of document ready
})(jQuery); // end of jQuery name space

$(document).ready(function(){
    $('ul.tabs').tabs();
  });


// create the module and name it scotchApp
var mpApp = angular.module('mpApp', ['ngRoute']);

// configure our routes
mpApp.config(function($routeProvider) {
    $routeProvider

        // route for the home page
        .when('/', {
            templateUrl : 'guides/research-question.html',
            controller  : 'mainController',
            activetab: 'research-question'
        })

        // route for the about page
        .when('/research-question', {
            templateUrl : 'guides/research-question.html',
            controller  : 'mainController',
            activetab: 'research-question'
        })

        // route for the contact page
        .when('/abstract', {
            templateUrl : 'guides/abstract.html',
            controller  : 'mainController',
            activetab: 'abstract'
        });
});

// create the controller and inject Angular's $scope
mpApp.controller('mainController', function($scope, $route) {

    $scope.$route = $route;
  
  $scope.tab = 'tab1';
  $scope.setTab = function(val) {
    $scope.tab = val;
  }
});