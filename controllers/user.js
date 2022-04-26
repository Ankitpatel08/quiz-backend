const User = require('../models/user');

exports.postUserData = (req, res, next) => {
    const user = new User(req.body);
    user.saveUser();
    
    res.status(200).send('success');
};

exports.postLoginData = (req, res, next) => {
    console.log(req.body);
    res.status(200).send('success');
};

exports.getUserDetails = (req, res, next) => {
    const users = User.fetchAllUsers();
    let userDetails = users.filter(user => user.userId == 'u1');
    res.status(200).send(userDetails);
};