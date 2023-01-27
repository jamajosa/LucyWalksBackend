const mongoose = require("mongoose");

const QuestionSchema = mongoose.Schema({
    question:{
        type: String,
        required: true
    },
    photo:{
        type: String
    },
    badAnswers: [{answer: String} ],
    goodAnswer:{
        type: String,
        required: true
    },
    value:{
        type: Number,
        required: true
    },
    date :{
        type: String,
        default: Date.now
    }
})

module.exports = mongoose.model("Question",QuestionSchema);