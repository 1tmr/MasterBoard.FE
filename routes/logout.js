const router = require('express').Router();

router.get("/", function(req, res){
  req.logout();
  return res.redirect('/');
});

module.exports = router;
