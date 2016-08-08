var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var connector = require('./models/connector');
var mongoose = require('mongoose');
var dbaseConfig = require('./models/config.json');
var routes = require('./routes/index');
var loginRoute = require('./routes/login');
var cityRoute = require('./routes/city');
var stateRoute = require('./routes/state');
var bloodGroupRoute = require('./routes/bloodgroup');
var oauth2orize = require('oauth2orize');
var oauth = require('./oauth');
var session = require('express-session');
var passport = require('passport');
var codes = require('./codes.json');
var models = require('./models');

var app = express();

connector(mongoose, dbaseConfig.production);
require('./seed')(models);
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({ secret: 'iyamnotsouthhero'}));
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);






app.use('/', routes);
app.use('/api/login', loginRoute.registerRoutes(models, passport, oauth, codes));
app.use('/api/city', cityRoute.registerRoutes(models, codes));
app.use('/api/state', stateRoute.registerRoutes(models, codes));
app.use('/api/bloodgroup', bloodGroupRoute.registerRoutes(models, codes));
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
    console.log(err);
    console.log(req.body);
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
