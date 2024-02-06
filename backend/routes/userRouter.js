const express = require('express');
const router = express.Router();
const signUp = require('../controllers/signUp');
const signIn = require('../controllers/signIn.js');


router.post('/signUp', signUp.createUser);
router.post('/signIn', signIn.signIn);


module.exports = router;


