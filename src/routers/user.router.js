const express = require('express');

const userControler = require('../controller/user.controler');
const userValidation = require('../middleware/user.validation');

const router = express.Router();

router.post('/login', userValidation.loginFieldsValidation, userControler.loginValidation);

module.exports = router;
