// This Set initialize core modules for the application
const express = require('express'),
      http = require('http');
// adding new routes
const index   = require('./routes/index');

// here we are initializing our application with EXPRESS libraries
var app = express();
// this will set a PORT of the application, so we will connect it with
// localhost:3000
app.set('port', 80);
// set html builder engine
app.set('view engine', 'pug');
// place Bootstrap CSS
app.use('/static', express.static('static'));

app.use('/', index);
//app.use('/admin/user', admUsr);

// this deck is initalizing HTTP protocol
http.createServer(app).listen(app.get('port'), function() {
  console.log('running on ' + app.get('port'));
});
