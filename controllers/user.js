const User = require('../models/user');

exports.postUserData = (req, res, next) => {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    User.create({
        name: name,
        email: email,
        password: password   
    }).then(result => {
        console.log(result);
    }).catch(err => console.log(err))
    
};

exports.postLoginData = (req, res, next) => {
    let email = req.body.email;
    let password = req.body.password;

    User.findOne({
        where: {email: email}
    }).then(user => {
        if(user.password == password) {
            res.status(200).send(user);
        }
    }).catch(err => console.log(err));
};

exports.getUserDetails = (req, res, next) => {
    const userId = req.params.userId;

    User.findByPk(userId).then(user => {
        res.status(200).send(user);
    }).catch(err => console.log(err));
};