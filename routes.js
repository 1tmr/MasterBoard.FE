const express = require('express');
// adding new routes
const index   = require('./routes/index');
const home    = require('./routes/home/home')
// club all together
var routes = express();
routes.use('/', index);
routes.use('/home', home);
module.exports = routes;
