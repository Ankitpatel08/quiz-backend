const Sequelize = require('sequelize');

const sequelize = new Sequelize('quiz', 'root', 'root', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;