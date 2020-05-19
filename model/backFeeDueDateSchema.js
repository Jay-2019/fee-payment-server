//Models - The schema definition of the Model

const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');
const Schema = mongoose.Schema;

let backFeeDueDateSchema = new Schema({

    firstYear: {
        type: Date,
        required: true
    },
    secondYear: {
        type: Date,
        required: true
    },
    thirdYear: {
        type: Date,
        required: true
    },
    fourthYear: {
        type: Date,
        required: true
    },

});
backFeeDueDateSchema.plugin(timestamps);
module.exports = mongoose.model('backFeeDueDate', backFeeDueDateSchema, 'backFeeDueDate');