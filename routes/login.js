const router = require('express').Router(),
      auth = require('./auth');

router.get("/login", auth.optional, function(req, res){
  res.render('login', message = {status: 200});
});

router.post("/login", auth.optional, function(req, res, next){




/*  if(req.body.login == 'user@mail.com' && req.body.password == "password")
    res.redirect('/home');
  else{
    res.render('login', message = {status: 500, warning: "wrong password"});
  }*/
});

module.exports = router;
