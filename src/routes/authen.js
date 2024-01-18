var express = require('express');
var router = express.Router();
const authenController = require('../app/controllers/AuthenController');

router.get('/', authenController.index);

router.post('/login', authenController.login);

module.exports = router;
