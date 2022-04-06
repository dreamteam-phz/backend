const mongoose = require('mongoose');

const surveyModelSchema = new mongoose.Schema({
    question: {
        required: true,
        type: String
    },
    comment: {
        required: true,
        type: Boolean
    }
});

const scoresModelSchema = new mongoose.Schema({
    surveyID:{
        required:true,
        type:String
    },
    results:[{
        score: {
            required: true,
            type: Number
        },
        comment: {
            required: false,
            type: String
        },
        ip: {
            required: false,
            type: Number
        }
    }]
});

const usersModelSchema = new mongoose.Schema({
    email: {
        required: true,
        type: String
    },
    password: {
        required: true,
        type: String
    }
});

const Surveys = mongoose.model('Surveys', surveyModelSchema)
const Scores = mongoose.model('Scores', scoresModelSchema)
const Users = mongoose.model('Users', usersModelSchema)


module.exports = {Surveys, Scores, Users}