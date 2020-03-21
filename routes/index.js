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

router.post("/login", function(req, res){
  if(req.body.login == 'user@mail.com' && req.body.password == "password")
    out = {result: "password correct"};
  else
    out = {result: "wrong password"};
  res.json(out);
})

router.get("/signup", function(req, res){
  res.render('signup');
});

// MUST HAVE LINE in case you want it working =)
module.exports = router;
