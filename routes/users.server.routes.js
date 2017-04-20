
var users = require('../public/js/users.server.controller.js');

module.exports = function(app) {
    app.route('/users').post(users.create);
};