const router = require('express').Router(),
      auth = require('./auth');

router.use('/home', require('./home'));
router.use('/calendar', require('./calendar'));
router.use('/game', require('./game'));
router.use('/admin', require('./admin'));
router.use("/login", require('./login'));
router.use("/logout", require('./logout'));


router.get("/", function (req, res){
  if(!req.isAuthenticated()){
    res.render('index');
  } else {
    res.redirect('/home');
  };
});

router.get("/index", function(req,res){
  return res.redirect('/');
});

router.get("/signup", function(req, res){
  return res.render('signup');
});

module.exports = router;
