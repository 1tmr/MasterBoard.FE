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

  return passport.authenticate('local', {failureRedirect: '/login', successRedirect: '/home'}, (err, passportUser, info) => {
    if(err)
      return next(err);

    if(passportUser){
      return req.logIn(passportUser, function(err) {
        if (err) { return next(err); }
        const user = passportUser;
        user.token = passportUser.generateJWT();

        return res
              .status(200)
              //.cookie('token', user.token)
              .redirect('/home');
      });
    }
    return res.status(400).render('login', message = {status: 500, warning: "incorrect username and password"});
  })(req, res, next);
});

/*router.post("/", passport.authenticate('local', {
        failureRedirect: '/login',
        successRedirect: '/home',
        failureFlash: 'Invalid username or password'
    }));*/

module.exports = router;
