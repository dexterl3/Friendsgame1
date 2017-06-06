var config = require('./config'),
    mongoose = require('mongoose');

module.exports = function() {
	mongoose.Promise = global.Promise;
    var db = mongoose.connect(config.db);
    //Schema
	require('../public/js/models/user.server.model');
    return db;
};