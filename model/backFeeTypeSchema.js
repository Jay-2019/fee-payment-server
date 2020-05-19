//Models - The schema definition of the Model

const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');
const Schema = mongoose.Schema;

let backFeeTypeSchema = new Schema({


    totalFee: {
        type: Number,
        required: true
    },
    examinationFormFee: {
        type: Number,
        required: true
    },
    backPaper: {
        type: Number,
        required: true
    },
    delayFee: {
        type: Number,
        required: true
    },
    otherCharges: {
        type: Number,
        required: true
    },

});
backFeeTypeSchema.plugin(timestamps);
module.exports = mongoose.model('backFeeType', backFeeTypeSchema, 'backFeeType');