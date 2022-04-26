
const express = require('express');
const { postUserData, postLoginData, getUserDetails } = require('../controllers/user');

const router = express.Router();

router.post('/signup', postUserData);
router.post('/login', postLoginData);

router.get('/user', getUserDetails);

module.exports = router;