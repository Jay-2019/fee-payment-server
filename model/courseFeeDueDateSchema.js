//Models - The schema definition of the Model

const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');
const Schema = mongoose.Schema;

let courseFeeDueDateSchema = new Schema({

    caste: {
        type: String,
        required: true
    },
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
courseFeeDueDateSchema.plugin(timestamps);
module.exports = mongoose.model('courseFeeDueDate', courseFeeDueDateSchema, 'courseFeeDueDate');