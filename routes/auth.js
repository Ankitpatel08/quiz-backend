
const express = require('express');

const router = express.Router();

router.post('/signup', (req, res, next) => {
    console.log(req.body);
    res.status(200).send('success');
});

router.post('/login', (req, res, next) => {
    console.log(req.body);
    res.status(200).send('success');
});

module.exports = router;