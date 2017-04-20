var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var UserSchema = new Schema({
    firstname: String,
    lastname: String,
    Friendid: Number,
    games: String,
});

mongoose.model('User', UserSchema);