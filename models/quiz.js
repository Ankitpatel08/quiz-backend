const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Quiz = sequelize.define('quiz', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    code: {
        type: Sequelize.STRING,
        allowNull: false
    },
    question: {
        type: Sequelize.STRING,
        allowNull: false
    },
    optionsA: {
        type: Sequelize.STRING,
        allowNull: false
    }, 
    optionsB: {
        type: Sequelize.STRING,
        allowNull: false
    },
    optionsC: {
        type: Sequelize.STRING,
        allowNull: false
    },
    optionsD: {
        type: Sequelize.STRING,
        allowNull: false
    },
    answer: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = Quiz;