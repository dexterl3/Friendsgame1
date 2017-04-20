//'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('AppCtrl', function ($scope, $http,createFriends) {

    $http({
      method: 'GET',
      url: '/api/name'
    }).
    success(function (data, status, headers, config) {
      $scope.name = data.name;
    }).
    error(function (data, status, headers, config) {
      $scope.name = 'Error!';
    });

    $scope.friends = createFriends;

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
 