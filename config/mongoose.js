var config = require('./config'),
    mongoose = require('mongoose');

module.exports = function() {
    var db = mongoose.connect(config.db);
    //Schema
	require('../public/js/models/user.server.model');
    return db;
};