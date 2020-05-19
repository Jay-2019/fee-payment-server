//Services - The services contains the database queries and returning objects or throwing errors.

// import { studentProfile, courseFee } from "../model/index";
const studentProfile = require('../model/studentProfileSchema');
const courseFee = require('../model/courseFeeSchema');
const backFee = require('../model/backFeeSchema');
const courseFeeDueDate = require('../model/courseFeeDueDateSchema');
const courseFeeType = require("../model/courseFeeTypeSchema");
const backFeeType = require("../model/backFeeTypeSchema");
const backFeeDueDate = require("../model/backFeeDueDateSchema");
const { log } = console;


//faculty Admin Routes
// set(update) courseFee Due Date
exports.updateCourseFeeDueDate = (req, res) => {
    let newDate = new courseFeeDueDate(req.body);

    courseFeeDueDate.findByIdAndUpdate(req.params.id, {
        firstYear: newDate.firstYear,
        secondYear: newDate.secondYear,
        thirdYear: newDate.thirdYear,
        fourthYear: newDate.fourthYear
    }, (err, courseFeeDueDate) => {
        err ? log(err.message) : res.json({ 'updateCourseFeeDueDate': ' update successfully' });
    });

}
// get courseFee Due Date
exports.getCourseFeeDueDate = (req, res) => {
    // log(req.params.id);
    courseFeeDueDate.findById(req.params.id, (err, courseFeeDueDate) => {
        err ? log(err.message) : res.json(courseFeeDueDate);
    });
}

// set(update) courseFeeType
exports.updateCourseFeeType = (req, res) => {
    courseFeeType.findByIdAndUpdate(req.params.id, req.body, (err, courseFeeType) => {
        err ? log(err.message) : res.json({ 'updateCourseFeeType': ' update successfully' });
    });
};

//set(update) backFeeType
exports.updateBackFeeType = (req, res) => {
    const newFee = backFeeType(req.body);
    backFeeType.findByIdAndUpdate(req.params.id, {
        totalFee: newFee.totalFee,
        examinationFormFee: newFee.examinationFormFee,
        backPaper: newFee.backPaper,
        delayFee: newFee.delayFee,
        otherCharges: newFee.otherCharges
    }, (err, backFeeType) => {
        err ? res.status(404).send("id not found") : res.status(200).json(backFeeType);
    });
}


//set(update) backFee-Due-Date
exports.updateBackFeeDueDate = (req, res) => {
    const newDate = backFeeDueDate(req.body);
    backFeeDueDate.findByIdAndUpdate(req.params.id, {
        firstYear: newDate.firstYear,
        secondYear: newDate.secondYear,
        thirdYear: newDate.thirdYear,
        fourthYear: newDate.fourthYear
    }, (err, backFeeDueDate) => {
        err ? console.log(err.message) : res.status(200).json({ "BackFeeDueDate": "update successfully" });
    });
}

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
            return data.year;
        })
        res.json(year);
    })
}

//receiptCourseFee
exports.receiptCourseFee = (req, res) => {
    courseFee.find({ studentId: req.params.id }, (err, courseFee) => {
        err ? console.log(err.message) : res.json(courseFee);
    })
}

//receiptCourseFee
exports.receiptBackFee = (req, res) => {
    backFee.find({ studentId: req.params.id }, (err, backFee) => {
        err ? console.log(err.message) : res.json(backFee);
    })
}

