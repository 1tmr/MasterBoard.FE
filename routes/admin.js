const router = require('express').Router();
const create = require('./admin/create');

router.use('/create', create);

module.exports = router;
