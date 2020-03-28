// This Set initialize core modules for the application
const express = require('express'),
      bodyParser   = require('body-parser'),
      cookieParser = require('cookie-parser'),
      session = require('express-session'),
      logger = require('morgan'),
      routes = require('./routes'),
      errorHandler = require('errorhandler');
//
const isProd = process.env.NODE_ENV === 'production';

// here we are initializing our application with EXPRESS libraries
var app = express();
// this will set a PORT of the application, so we will connect it with
app.set('port', 80);
// set html builder engine
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.set('view engine', 'pug');
// place Bootstrap CSS
app.use('/static', express.static('static'));
app.use(session({ secret: 'passport-tutorial', cookie: { maxAge: 60000 }, resave: false, saveUninitialized: false }));
if(!isProd){
  app.use(logger('dev'));
  app.use(errorHandler());
};
// attach all routes in one script
require('./config/passport');
app.use('/', routes);
// error logging
if(!isProd){
  console.log('NONE PROD');
  app.use((err,req,res)=>{
    res.status(err.status||500);
    res.json({errors: {message: err.message, error: err}});
  });
} else {
  console.log('PROD');
  app.use((err,req,res)=>{
    res.status(err.status||500);
    res.json({errors: {}});
  });
};
// this deck is initalizing HTTP protocol
function startApp() {
  return app.listen(app.get('port'), function() {
    console.log('running on ' + app.get('port'));
  });
};

startApp();
