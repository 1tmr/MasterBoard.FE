const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('home/admin/create', {title: "Create a Game", _path: "/game"});
});

module.exports = router;
