
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var weight = require('./routes/weight');
var http = require('http');
var path = require('path');
var config;

var app = express();

// all environments
app.engine('html', require('ejs').renderFile);
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')
app.use(express.favicon());
app.use(express.bodyParser());
app.use(express.cookieParser());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
    config = require('./config/development.json');
    app.use(express.errorHandler());
}

// production only
if ('production' == app.get('env')) {
    config = require('./config/production.json');
}

app.get('/', routes.index);
app.get('/login', routes.login);
app.post('/authenticate', user.authenticate);

app.get('/user', user.index);
app.get('/api/user', user.list);
app.get('/api/user/:email', user.find);
app.post('/api/user', user.insert);

app.get('/weight', routes.checkAccess, weight.index);
app.get('/api/weight', weight.list);
app.post('/api/weight', weight.insert);


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
