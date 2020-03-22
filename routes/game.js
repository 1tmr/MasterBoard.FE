const router = require('express').Router();

router.use('/', require('./game/home'));

module.exports = router;
