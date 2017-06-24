//'use strict';
 
/* Controllers */

angular.module('myApp.controllers', []).
  controller('AppCtrl', function ($scope, $http,createFriends,gameBoard) {
    var vm = this;

    $http({
      method: 'GET',
      url: 'users' // /api/name or //59363695c4b516171413b343
    }).
    success(function (data, status, headers, config) {
      //$scope.users = data;
      $scope.users = data;


    }).
    error(function (data, status, headers, config) {
      $scope.name = 'Error!';
    });

    $scope.friends = createFriends;
    $scope.games = gameBoard;

    $http.get('/users')
    .success(function (data, status, headers, config) {
      $scope.list = data;
      console.log($scope.list); 
    });


  }).
  controller('MyCtrl1', function ($scope) {
    // write Ctrl here

    

  }).
  controller('MyCtrl2', function ($scope) {
    // write Ctrl here
    console.log(2+2);

  }).
  controller('CreatePeopleCtrl', function ($scope,createFriends) {
    $scope.friends = createFriends;
     
  });
 
