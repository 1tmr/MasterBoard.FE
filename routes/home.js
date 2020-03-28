const router = require('express').Router(),
      auth = require('./auth');

router.get('/', auth.require, (req, res) => {
  res.render('home/index', {title: "Game Board News", _path: "/home"});
});

module.exports = router;
