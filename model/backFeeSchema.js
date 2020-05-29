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
        subject: {
            type: Array,
            required: true
        },
        semester: {
            type: String,
            required: true
        },
        branch: {
            type: String,
            required: true
        },
        backFee: {
            type: Number,
            required: true
        },
        delayFee: {
            type: Number,
            required: true
        },
        totalFee: {
            type: Number,
            required: true
        }
    },
    studentInfo: {
        firstName: {
            type: String,
            uppercase: true,
            required: true
        },
        lastName: {
            type: String,
            uppercase: true,
            required: true
        },
        fatherName: {
            type: String,
            uppercase: true,
            required: true
        },
        admissionSession: {
            type: String,
            required: true
        },
        branch: {
            type: String,
            required: true
        }
    },
    backFeeType: {
        type: Object,
        require: true
    }


});
backFeeSchema.plugin(timestamps);
module.exports = mongoose.model('backFee', backFeeSchema, 'backFee');