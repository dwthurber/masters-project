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

        // route for the research question page
        .when('/research-question', {
            templateUrl : 'guides/research-question.html',
            controller  : 'mainController',
            activetab: 'research-question'
        })

        // route for the abstract page
        .when('/abstract', {
            templateUrl : 'guides/abstract.html',
            controller  : 'mainController',
            activetab: 'abstract'
        })
        
        // route for the introduction and background page
        .when('/intro-background', {
            templateUrl : 'guides/intro-background.html',
            controller  : 'mainController',
            activetab: 'intro-background'
        })
  
        // route for the literature review page
        .when('/literature-review', {
            templateUrl : 'guides/literature-review.html',
            controller  : 'mainController',
            activetab: 'literature-review'
        })
  
        // route for the data collection methods page
        .when('/data-collection', {
            templateUrl : 'guides/data-collection.html',
            controller  : 'mainController',
            activetab: 'data-collection'
        })
  
        // route for the data results summary page
        .when('/data-results', {
            templateUrl : 'guides/data-results.html',
            controller  : 'mainController',
            activetab: 'data-results'
        })
  
        // route for the data interpretation page
        .when('/data-interpretation', {
            templateUrl : 'guides/data-interpretation.html',
            controller  : 'mainController',
            activetab: 'data-interpretation'
        })
  
        // route for the conclusion page
        .when('/conclusion', {
            templateUrl : 'guides/conclusion.html',
            controller  : 'mainController',
            activetab: 'conclusion'
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