const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('home/selector', {title: "Game Board News", _path: "/game"});
});

module.exports = router;
