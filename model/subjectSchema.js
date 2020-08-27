//Models - The schema definition of the Model

const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');
const Schema = mongoose.Schema;

let subjectSchema = new Schema({

    subjectName: {
        type: String,
        required: true
    },
    subjectType: {
        type: String,
        required: true
    },
    branch: {
        type: String,
        required: true
    },
    semester: {
        type: String,
        required: true
    }
});
subjectSchema.plugin(timestamps);
module.exports = mongoose.model('subject', subjectSchema, 'subject');