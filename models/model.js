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
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Surveys'
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
            type: String
        }
    }]
});

const Surveys = mongoose.model('Surveys', surveyModelSchema)
const Scores = mongoose.model('Scores', scoresModelSchema)

module.exports = {Surveys, Scores}