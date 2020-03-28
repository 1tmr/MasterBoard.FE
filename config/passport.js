const passport = require('passport');
const LocalStrategy = require('passport-local');

const Users = require('../models/users');

passport.use(new LocalStrategy({
  usernameField: 'user[email]',
  passwordField: 'user[password]'
}, (email, password, done) =>{
  Users.find(email, (user)=>{
    if(!user || user.password != password){
      return done(null, false, {error:{'email or password':'is invalid'}});
    }
    return done(null, user);
  }).catch(done);
}));
