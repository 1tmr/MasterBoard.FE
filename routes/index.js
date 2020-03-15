const router = require('express').Router();

router.get("/", function (req, res){
  res.render('index');
});

router.get("/index", function(req,res){
  res.redirect('/');
});

router.get("/login", function(req, res){
  res.render('login');
});

// MUST HAVE LINE in case you want it working =)
module.exports = router;
