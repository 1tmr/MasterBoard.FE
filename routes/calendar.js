const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('home/calendar', {title: "Game Board News", _path: "/calendar"});
});

module.exports = router;
