//Services - The services contains the database queries and returning objects or throwing errors.

// import { studentProfile, courseFee } from "../model/index";
const studentProfile = require('../model/studentProfileSchema');
const courseFee = require('../model/courseFeeSchema');
const backFee = require('../model/backFeeSchema');
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

    feeData.studentId.push(req.params.id);

    feeData.save()
        .then((courseFee) => {
            res.status(200).json({ 'fee': 'course fee payment successfully' });
        })
        .catch(err => {
            res.status(400).send('course fee payment failed');
            log(err.message);
        });
}

// backFeePayment
exports.backFeePayment = (req, res) => {


    const feeData = new backFee(req.body);
    feeData.studentId.push(req.params.id);
    feeData.save()
        .then((backFee) => {
            res.status(200).json({ 'fee': 'back fee payment successfully' });
        })
        .catch(err => {
            res.status(400).send('back fee payment failed');
            log(err.message);
        });
}


//getCourseFeeYear
exports.getCourseFeeYear = (req, res) => {
    courseFee.find({ studentId: req.params.id }, (err, courseFee) => {

        let year = courseFee.map(data => {
            return data.feeInfo.year;
        })
        res.json(year);
    })
}

// return no of attempt of backFee
// exports.backFeeAttempt = (req, res) => {
//     console.log(req.params.id);
//     backFee.findById({ studentId: req.params.id }, { subject: req.params.subject }, (err, backFee) => {

//         // let attempt = backFee.map(data => {

//         //     return data.feeInfo.subject;
//         // })
//         // res.json(attempt);
//         console.log(backFee);
//     })
// }