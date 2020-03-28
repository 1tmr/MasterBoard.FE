const router = require('express').Router();

router.use('/home', require('./home'));
router.use('/calendar', require('./calendar'));
router.use('/game', require('./game'));
router.use('/admin', require('./admin'));


router.get("/", function (req, res){
  res.render('index');
});

router.get("/index", function(req,res){
  res.redirect('/');
});

router.get("/login", function(req, res){
  res.render('login', message = {status: 200});
});

router.post("/login", function(req, res){
  if(req.body.login == 'user@mail.com' && req.body.password == "password")
    res.redirect('/home');
  else{
    res.render('login', message = {status: 500, warning: "wrong password"});
  }
})

router.get("/signup", function(req, res){
  res.render('signup');
});

// MUST HAVE LINE in case you want it working =)
module.exports = router;
