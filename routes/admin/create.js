const router = require('express').Router(),
      auth = require('../auth');

router.get('/', auth.require, (req, res) => {
  res.render('home/admin/create', {title: "Create a Game", _path: "/game"});
});

module.exports = router;
