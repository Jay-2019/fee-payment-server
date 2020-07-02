//Models - The schema definition of the Model

const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');
const Schema = mongoose.Schema;

let branchSchema = new Schema({

    branchName: {
        type: String,
        required: true,
        unique:true
    },
});
branchSchema.plugin(timestamps);
module.exports = mongoose.model('branch', branchSchema, 'branch');