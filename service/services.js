//Services - The services contains the database queries and returning objects or throwing errors.

// import { studentProfile, courseFee } from "../model/index";
const studentProfile = require('../model/studentProfileSchema');
const courseFee = require('../model/courseFeeSchema');
const { log } = console;



//signUp service
exports.studentSignUp = (req, res) => {
    let newStudent = new studentProfile(req.body);
    log(newStudent);
    newStudent.save()
        .then(studentSignUp => {
            res.status(200).json({ 'signUp': 'signUp successfully' });
        })
        .catch(err => {
            res.status(400).send('signUp failed');
            log(err.message);
        });
};

// Authentication
exports.studentAuthentication = (req, res) => {
    const { email, password } = req.params;
    studentProfile.findOne({ email: email, confirmPassword: password }, (err, studentProfile) => {
        log(studentProfile);
        err ? log(err.message) : res.json(studentProfile);
        log(req.params);
    });
};

// courseFeePayment
exports.courseFeePayment = (req, res) => {
    const feeData = new courseFee(req.body);
    log(feeData);
    feeData.studentId.push();

    feeData.save()
        .then((courseFee) => {
            res.status(200).json({ 'fee': 'course fee payment successfully' });
        })
        .catch(err => {
            res.status(400).send('course fee payment failed');
            log(err.message);
        });
}