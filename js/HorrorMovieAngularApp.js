var mainApp = angular.module("angularApp", ['ngSanitize']);

mainApp.controller("theInfoBase", function ($scope) {
  //load info items and org items
  if (typeof movieFullViews != "undefined") {
    $scope.movies = movieFullViews.movies;
    $scope.currentMovieId = $scope.movies[0].id;
  }
 
  if (typeof movieHierarchy != "undefined") {
    $scope.folders = movieHierarchy.folders;
  }
 
  if (typeof yearIndex != "undefined") {
    $scope.years = yearIndex.years;
  }
 
  if (typeof movieAssociations != "undefined") {
    $scope.associations = movieAssociations.associations;  }
 
  if (typeof movieSequences != "undefined") {
    $scope.sequences = movieSequences.sequences;
  }

  if (typeof AboutPage != "undefined") {
    $scope.abouts = AboutPage.info;
  }


  //set the initial values of page display variables we use
  //$scope.navType = "hierarchy"
  $scope.pageType = "home"

  //define page display functions
  $scope.setCurrentMovieId = function (movieId) {
    $scope.currentMovieId = movieId;
  };
  $scope.setCurrentNavType = function (navType) {
    $scope.navType = navType;
  };
  $scope.setCurrentPageNavAndMovie = function (pageType, navType,movieId) {
    $scope.pageType = pageType;
    $scope.navType = navType;
    $scope.currentMovieId= movieId;
  };
  $scope.setCurrentPageAndNav = function (pageType,navType) {
    $scope.pageType = pageType;
    $scope.navType = navType;
  };


});
