const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
    console.log(req.body);
    console.log(req.url);
});

module.exports = router;