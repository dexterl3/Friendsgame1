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

	var game = [
				[0,0,0,0,0],
				[0,0,0,0,0],
				[0,0,0,0,0],
				[0,0,0,0,0],
				[0,0,0,0,0]
			];

	return {
 		gameB: game,

		// createGameBoard: function(){
		// 	var board = [
		// 		[0,0,0,0,0],
		// 		[0,0,0,0,0],
		// 		[0,0,0,0,0],
		// 		[0,0,0,0,0],
		// 		[0,0,0,0,0]
		// 	];
		// 	game = board;
		// 	console.log(game);
		// 	return board;
		// },

		//{{ games.createGameBoard(gameB) }}

		addToGameBoard: function(game,x, y,z){
			game[x][y] = z;
			console.log(game);
			return "These are your boards " + x  + " "+ y;
		}
		//  {{ games.addToGameBoard(5,5,1) }}
	
	};
});
