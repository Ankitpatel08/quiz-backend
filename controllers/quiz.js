const Quiz = require("../models/quiz");

exports.saveQuestion = (req, res, next) => {
    const code = req.body.code;
    const question = req.body.question;
    const optionsA = req.body.optionsA;
    const optionsB = req.body.optionsB;
    const optionsC = req.body.optionsC;
    const optionsD = req.body.optionsD;
    const answer = req.body.answer;

    Quiz.create({
          code: code,
          question: question,
          optionsA: optionsA,
          optionsB: optionsB,
          optionsC: optionsC,
          optionsD: optionsD,
          answer: answer
    }).then(result => {
        res.status(200).send(result);
    }).catch(err => console.log(err));
}

exports.getQuizData = (req, res, next) => {
    let code = req.params.code;

    Quiz.findAll({
        where: { code: code }
    }).then(questions => {
        let updatedQuestions = questions.map(question => {
            let options = [];

            options.push(question.optionsA);
            options.push(question.optionsB);
            options.push(question.optionsC);
            options.push(question.optionsD);

            question.dataValues.options = options;

            delete question.dataValues.optionsA;
            delete question.dataValues.optionsB;
            delete question.dataValues.optionsC;
            delete question.dataValues.optionsD;

            return question;
        });
        
        res.status(200).send(updatedQuestions);
    }).catch(err => console.log(err));
}