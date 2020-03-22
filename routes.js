const express  = require('express');
// adding new routes
const index    = require('./routes/index');
const home     = require('./routes/home/home');
const calendar = require('./routes/home/calendar');
const game     = require('./routes/home/game');
// club all together
var routes = express();
routes.use('/', index);
routes.use('/home', home);
routes.use('/calendar', calendar);
routes.use('/game', game);
module.exports = routes;
