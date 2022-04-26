const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const authRoutes = require('./routes/auth');
const quizRoutes = require('./routes/quiz');
const { get404 } = require('./controllers/error');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use((req,res,next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token");
    res.setHeader("Access-Control-Allow-Methods", "DELETE, GET, HEAD, OPTIONS, PATCH, POST, PUT");
    next();
});

app.use('/auth', authRoutes);
app.use('/quiz', quizRoutes);

app.use(get404);

app.listen(3000);