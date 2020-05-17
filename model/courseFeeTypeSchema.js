//Models - The schema definition of the Model

const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');
const Schema = mongoose.Schema;

let courseFeeTypeSchema = new Schema({

    year: {
        type: String,
        required: true
    },
    totalFee: {
        type: Number,
        required: true
    },
    delayFee: {
        type: Number,
        required: true
    },
    studyTripFee: {
        type: Number,
        required: true
    },
    tuitionFee: {
        type: Number,
        required: true
    },
    laboratory: {
        type: Number,
        required: true
    },
    securityFee: {
        type: Number,
        required: true
    },
    hostelFee: {
        type: Number,
        required: true
    },
    otherCharges: {
        type: Number,
        required: true
    },
    entranceFees: {
        type: Number,
        required: true
    },
    centralLibraryFee: {
        type: Number,
        required: true
    },
    studentSmartCardFee: {
        type: Number,
        required: true
    },
    sportsAndCulturalProgramFee: {
        type: Number,
        required: true
    },
    studentWelfareFee: {
        type: Number,
        required: true
    },
    developmentFee: {
        type: Number,
        required: true
    },
    studentAcademicGuide: {
        type: Number,
        required: true
    },
    examinationFee: {
        type: Number,
        required: true
    },
    energyCharges: {
        type: Number,
        required: true
    },
    internetFee: {
        type: Number,
        required: true
    }
});
courseFeeTypeSchema.plugin(timestamps);
module.exports = mongoose.model('courseFeeType', courseFeeTypeSchema, 'courseFeeType');