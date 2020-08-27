//Models - The schema definition of the Model

const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');
const Schema = mongoose.Schema;

let studentProfileSchema = new Schema({

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
    motherName: {
        type: String,
        uppercase: true,
        required: true
    },
    fatherName: {
        type: String,
        uppercase: true,
        required: true
    },
    caste: {
        type: String,
        uppercase: true,
        required: true
    },
    domicile: {
        type: String,
        required: true
    },
    minority: {
        type: String,
        uppercase: true,
        required: true
    },
    minorityType: {
        type: String,
        required: true
    },
    physicalHandicap: {
        type: String,
        uppercase: true,
        required: true
    },
    physicalHandicapType: {
        type: String,
        uppercase: true,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    rollNumber: {
        type: Number,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    branch: {
        type: String,
        required: true
    },
    admissionSession: {
        type: String,
        required: true
    },
    enrollmentNumber: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    confirmPassword: {
        type: String,
        required: true
    },
    acceptTerms: {
        type: Boolean,
        required: true
    },
});
studentProfileSchema.plugin(timestamps);
module.exports = mongoose.model('student', studentProfileSchema, 'studentProfile');