const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const Users = require('../models/users');

module.exports = app => {
  app.use(passport.initialize());
  app.use(passport.session());

  passport.use(new LocalStrategy({
    usernameField: 'login',
    passwordField: 'password'
  }, (email, password, done) =>{
    var user = Users.find(email);
    if(!user || user.password != password)
      return done(null, false, {error:{'email or password':'is invalid'}});
    return done(null, user);
  }));

  passport.serializeUser((user, done) => {
      done(null, user.email);
  });

  passport.deserializeUser((email, done) => {
      done(null, {email: email});
  });
}
