const passport = require('passport');
const LocalStrategy = require('passport-local');

const Users = require('../models/users');

passport.use(new LocalStrategy({
  usernameField: 'login',
  passwordField: 'password'
}, (email, password, done) =>{
  var user = Users.find(email);
  if(!user || user.password != password)
    return done(null, false, {error:{'email or password':'is invalid'}});
  return done(null, user);
}));
