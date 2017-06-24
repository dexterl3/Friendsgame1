'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', []).
  value('version', '0.1')
.factory('createFriends', function(){

	return {

		createFriends: function(){
			return "These are your friends";
		}
	};
})


.factory('gameBoard', function(){

	return {

		gameBoard: function(){
			return "These are your boards";
		}
		
	};
});
