const express = require('express');
const { getQuizData, saveQuestion } = require('../controllers/quiz');

const router = express.Router();

router.post('/add', saveQuestion);
router.get('/:code', getQuizData);

module.exports = router;