//Models - The schema definition of the Model

const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');
const Schema = mongoose.Schema;

let backFeeSchema = new Schema({
    studentId: [{
        type: Schema.Types.ObjectId,
        ref: 'student'
    }],
    feeInfo: {
        attempt: {
            type: Number,
            default: 1,
            required: true
        },
        subject: {
            type: String,
            required: true
        },
        backFee: {
            type: Number,
            required: true
        },
        lateFee: {
            type: Number,
            required: true
        },
        totalFee: {
            type: Number,
            required: true
        }
    },

});
backFeeSchema.plugin(timestamps);
module.exports = mongoose.model('backFee', backFeeSchema, 'backFee');