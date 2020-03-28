const router = require('express').Router(),
      auth = require('../auth');

router.get('/', auth.require, (req, res) => {
  res.render('home/selector', {title: "Game Board News", _path: "/game"});
});

router.get('/:gid', auth.require, (req, res) =>{
  if(req.params.gid == 2){
    var game = {title: "Harry P"}
    res.render('home/game/feed', game);
  } else {
    res.render('404_error');
  }
});

module.exports = router;
