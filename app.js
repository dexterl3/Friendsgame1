	
/**
 * Module dependencies
 */

var express = require('express'),
  bodyParser = require('body-parser'),
  morgan = require('morgan'),
  mongoose = require('./config/mongoose'),
  routes = require('./routes'),
  api = require('./routes/api'),
  http = require('http'),
  path = require('path');
 

var app = module.exports = express();
 

 var db = mongoose(),
    app = express();
app.set('port', 3000);
/**
 * Configuration
 */

// all environments

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
//app.use(morgan('dev'));
// require('./routes/users.server.routes.js')(app);

app.use(express.static(path.join(__dirname, 'public')));
//

/**
 * Routes
 */

// serve index and view partials
app.get('/', routes.index);
app.get('/partials/:name', routes.partials);


// JSON API
app.get('/api/name', api.name);

// redirect all others to the index (HTML5 history)
app.get('*', routes.index);



/**
 * Start Server
 */

http.createServer(app).listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});
