const express  = require('express');
// club all together
var routes = express();
routes.use('/', require('./routes/index'));
routes.use('/home', require('./routes/home'));
routes.use('/calendar', require('./routes/calendar'));
routes.use('/game', require('./routes/game'));
routes.use('/admin', require('./routes/admin'));
// export upwards
module.exports = routes;
