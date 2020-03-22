const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('home/index', {title: "Game Board News", _path: "/home"});
});

module.exports = router;
  
