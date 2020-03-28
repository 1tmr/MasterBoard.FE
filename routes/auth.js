function isLoggedIn(req, res, next) {
  if(req.isAuthenticated()) {
      return next();
  } else {
      return res.redirect('/');
  }
}

const auth = {
  require: isLoggedIn,
  optional: (req, res, next)=>{return next();}
}

module.exports = auth;
