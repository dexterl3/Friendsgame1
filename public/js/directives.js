'use strict';

/* Directives */

angular.module('myApp.directives', []).
  directive('appVersion', function (version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }).
  directive('createPeople', function (){

	return { 
		restrict: 'E',
	 	//templateUrl: "Apache24/htdocs/AngularExpress/public/js/create-people-directive.html"
		 template: '<p>Dexter is awesome</p>'  
	};
});