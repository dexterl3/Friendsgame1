var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var UserSchema = new Schema({
    firstName: String,
    lastName: String,
    friendId: Number,
    games: String,
    gameId: Number,
});

var UserSchema = new Schema({
    username: {
    type: String,
    unique: true
  },

});

mongoose.model('User', UserSchema);

/*
db.todos.insert({"firstName":"Dexter", "lastName": "nikola", "friendId": "123", "gameId": "1",  "games": "abcd"})

POST /users HTTP/1.1
Host: localhost:3000
Content-Type: application/json
Cache-Control: no-cache
Postman-Token: 33104b4e-2ab4-44f9-54bc-03c33cc53040

{
	"firstName": "Eex",
    "lastName": "As",
    "friendId": "2",
    "games": "test",
    "gameId": "125"
}


curl -X PUT -H "Content-Type: application/json" -d '{"firstName": "UpdatedName"}' localhost:3000/users/[59363695c4b516171413b343]
*/