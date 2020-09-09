const express = require('express');
const register = require('../controllers/authControllers/register');

const router = express.Router();

router.post('/register', register);

module.exports = router;
