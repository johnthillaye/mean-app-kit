/**
 * Module dependencies
 */
var express = require('express'),
    favicon = require('serve-favicon'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    models = require('./models'),
    routescan = require('express-routescan'),
    http = require('http'),
    path = require('path'),
    config = require('./config.js');

var app = module.exports = express();

// Configure all environments
app.set('port', process.env.PORT || config.port);

app.use(favicon(__dirname + '/dist/favicon.ico'));
app.use(express.static(path.join(__dirname, 'dist')));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json({strict: false}));
app.set('view engine', 'ejs');

// development only
if (app.get('env') === 'development') {
  app.use(express.static(path.join(__dirname, 'src')));
  app.use('/bower_components', express.static(path.join(__dirname, 'bower_components')));
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: err
    });
  });
}

//Connect to db
var connection = mongoose.createConnection(config.dbUrl);
connection.on('error', console.error.bind(console, 'connection error:'));
connection.once('open', function () {
  console.info('connected to database')
});

// Pipe Model in DB object
app.use(function( req, res, next ){
  req.db = {
    User: connection.model('User', models.User, 'users')
  }
  next();
})

// Set up the routes.
routescan(app);

// Serve the index.html for root path.
app.get('/', function(req, res) {    
  res.sendFile(__dirname + '/dist/index.html');
});

//Redirect lost user to homepage or 404
app.get('*', function(req, res) {
  res.sendFile(__dirname + '/dist/index.html');
});

//Start Server
var server = http.createServer(app).listen(app.get('port'), function () {
	console.log('Express server listening on port ' + app.get('port'));
});
