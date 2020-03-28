const router = require('express').Router(),
      auth = require('./auth');

router.use('/home', require('./home'));
router.use('/calendar', require('./calendar'));
router.use('/game', require('./game'));
router.use('/admin', require('./admin'));
router.use("/login", require('./login'));


router.get("/", auth.optional, function (req, res){
  res.render('index');
});

router.get("/index", auth.optional, function(req,res){
  res.redirect('/');
});

router.get("/signup", auth.optional, function(req, res){
  res.render('signup');
});

// MUST HAVE LINE in case you want it working =)
module.exports = router;
