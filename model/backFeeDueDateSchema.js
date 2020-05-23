//Models - The schema definition of the Model

const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');
const Schema = mongoose.Schema;

let backFeeDueDateSchema = new Schema({

    firstSemester: {
        type: Date,
        required: true
    },
    secondSemester: {
        type: Date,
        required: true
    },
    thirdSemester: {
        type: Date,
        required: true
    },
    fourthSemester: {
        type: Date,
        required: true
    },
    fifthSemester: {
        type: Date,
        required: true
    },
    sixthSemester: {
        type: Date,
        required: true
    },
    seventhSemester: {
        type: Date,
        required: true
    },
    eighthSemester: {
        type: Date,
        required: true
    },
});
backFeeDueDateSchema.plugin(timestamps);
module.exports = mongoose.model('backFeeDueDate', backFeeDueDateSchema, 'backFeeDueDate');