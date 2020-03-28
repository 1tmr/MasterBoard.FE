const router = require('express').Router(),
      passport = require('passport'),
      auth = require('./auth');

router.get("/", auth.optional, function(req, res){
  res.render('login', message = {status: 200});
});

router.post("/", auth.optional, function(req, res, next){
  const { body: {login, password } } = req;

  if(!login)
    return res
          .status(422)
          .render('login', message= {status: 500, warning: "email required"});

  if(!password)
    return res
          .status(422)
          .render('login', message= {status: 500, warning: "password required"});

  return passport.authenticate('local', {session: false}, (err, passportUser, info) => {
    if(err)
      return next(err);

    if(passportUser){
      const user = passportUser;
      user.token = passportUser.generateJWT();

      return res
            .status(200)
            .cookie('token', user.token)
            .redirect('/home');
    }
    return res.status(400).render('login', message = {status: 500, warning: "incorrect username and password"});
  })(req, res, next);
});

module.exports = router;



/*  if(req.body.login == 'user@mail.com' && req.body.password == "password")
    res.redirect('/home');
  else{
    res.render('login', message = {status: 500, warning: "wrong password"});
  }*/
