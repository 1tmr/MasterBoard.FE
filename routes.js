const express = require('express');
// adding new routes
const index   = require('./routes/index');
// club all together
var routes = express();
routes.use('/', index);
module.exports = routes;
