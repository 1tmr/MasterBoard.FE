// This Set initialize core modules for the application
const express = require('express'),
      bodyParser   = require('body-parser'),
      cookieParser = require('cookie-parser'),
      session = require('express-session'),
      routes = require('./routes');
//
const isProd = process.env.NODE_ENV === 'production';

// here we are initializing our application with EXPRESS libraries
var app = express();
// this will set a PORT of the application, so we will connect it with
app.set('port', 81);
// set html builder engine
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.set('view engine', 'pug');
// place Bootstrap CSS
app.use('/static', express.static('static'));
// make configurational changes
app.use(session({
    secret: 'dummy-BW1MlE1tmNVsXrVosIwbRFBIPzvkDE0t',
    cookie: { maxAge: 60000 },
    resave: false,
    saveUninitialized: false
}));

app.use((req, res, next)=>{
  if(req.cookies.token !== undefined){
    req.headers["authorization"] = "Token " + req.cookies.token;
  }
  return next();
});

require('./config/passport');
// attach routes in one script
app.use('/', routes);
// this deck is initalizing HTTP protocol
function startApp() {return app.listen(app.get('port'));};

module.exports = startApp;
