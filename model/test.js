//Models - The schema definition of the Model

const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');
const Schema = mongoose.Schema;

let courseFeeSchema = new Schema({
    studentId: [{
        type: Schema.Types.ObjectId,
        ref: 'student'
    }],
    firstYear: {
        courseFee: {
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
        },
        submissionDate: {
            type: Date,
            default: Date.now()
        }
    },

    secondYear: {
        courseFee: {
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
        },
        submissionDate: {
            type: Date,
            default: Date.now()
        }
    },
    thirdYear: {
        courseFee: {
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
        },
        submissionDate: {
            type: Date,
            default: Date.now()
        }
    },
    fourthYear: {
        courseFee: {
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
        },
        submissionDate: {
            type: Date,
            default: Date.now()
        }
    }
});
courseFeeSchema.plugin(timestamps);
module.exports = mongoose.model('courseFee', courseFeeSchema, 'courseFee');