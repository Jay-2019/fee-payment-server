//Services - The services contains the database queries and returning objects or throwing errors.
const mongoose = require('mongoose');
// import { studentProfile, courseFee } from "../model/index";
const studentProfile = require('../model/studentProfileSchema');
const courseFee = require('../model/courseFeeSchema');
const backFee = require('../model/backFeeSchema');
const courseFeeDueDate = require('../model/courseFeeDueDateSchema');
const courseFeeType = require("../model/courseFeeTypeSchema");
const backFeeType = require("../model/backFeeTypeSchema");
const backFeeDueDate = require("../model/backFeeDueDateSchema");
const subject = require("../model/subjectSchema");
const adminAuth = require("../model/adminAuthSchema");
const branch = require("../model/branchSchema");
const { log } = console;


// get branch
exports.getBranch = (req, res) => {
    branch.find((err, branchList) => {

        let branchName = [];
        for (let data of branchList) {
            branchName = [...branchName, data.branchName]
        };

        err ? res.status(404).send("Not Found") : res.status(200).json(branchName);
    })
}

// create subject
exports.createBranch = (req, res) => {
    const newBranch = new branch(req.body);
    newBranch.save()
        .then(newBranch => {
            res.status(200).send({ "newBranch": "Created Successfully" });
        })
        .catch(error => {
            res.status(400).send('failed');
        });
}

// Reset Password(Admin) 
exports.resetAdminPassword = (req, res) => {
    const { verifiedEmail, createPassword, confirmPassword, securityQuestion, securityAnswer } = req.body;
    adminAuth.findOneAndUpdate({
        email: verifiedEmail,
        securityQuestion: securityQuestion,
        securityAnswer: securityAnswer
    },
        {
            password: createPassword,
            confirmPassword: confirmPassword
        }, (err, admin) => {
            err ? log(err.message) : res.status(200).send("Password Reset Successfully");
        });
};

// Admin Authentication
exports.adminAuthentication = (req, res) => {
    const { email, password } = req.params;
    adminAuth.findOne({ email: email, confirmPassword: password }, (err, admin) => {
        log(admin)
        err ? log(err.message) : res.json(admin);
    });
};

//get particular feeDetails of courseFee 
exports.getCourseFeeData = (req, res) => {
    courseFee.findById(req.params.id, (err, courseFee) => {
        err ? log(error.message) : res.status(200).json(courseFee);
    });
};

//get particular feeDetails of backFee 
exports.getBackFeeData = (req, res) => {
    backFee.findById(req.params.id, (err, backFee) => {
        err ? log(error.message) : res.status(200).json(backFee);
    });
};

// create subject
exports.createSubject = (req, res) => {
    const newSubject = new subject(req.body);
    newSubject.save()
        .then(newSubject => {
            res.status(200).json({ "newSubject": "Created Successfully" });
        })
        .catch(error => {
            res.status(400).send('failed');
        });
}

//get Subjects
exports.getSubject = (req, res) => {
    const { semester, branch } = req.params;
    subject.find({ semester: semester, branch: branch }, (err, subject) => {
        let subjectName = subject.map(data => data.subjectName);
        err ? log(err.message) : res.status(200).json(subjectName);
    })
}
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
// get courseFeeType
exports.getCourseFeeType = (req, res) => {
    courseFeeType.findById(req.params.id, (err, courseFeeType) => {
        err ? console.log(err.message) : res.status(200).json(courseFeeType);
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
};
//get backFeeType
exports.getBackFeeType = (req, res) => {
    backFeeType.findById(req.params.id, (err, backFeeType) => {
        err ? log(err.message) : res.status(200).json(backFeeType);
    });
}


//set(update) backFee-Due-Date
exports.updateBackFeeDueDate = (req, res) => {
    const newDate = backFeeDueDate(req.body);
    backFeeDueDate.findByIdAndUpdate(req.params.id, req.body, (err, backFeeDueDate) => {
        err ? console.log(err.message) : res.status(200).json({ "BackFeeDueDate": "update successfully" });
    });
};
//get BackFee-DueDate
exports.getBackFeeDueDate = (req, res) => {
    backFeeDueDate.findById(req.params.id, (err, backFeeDueDate) => {
        err ? log(err.message) : res.status(200).json(backFeeDueDate);
    });
};

//signUp service
exports.studentSignUp = (req, res) => {
    let newStudent = new studentProfile(req.body);

    newStudent.save()
        .then(studentSignUp => {
            res.status(200).json({ 'signUp': 'signUp successfully' });
        })
        .catch(err => {
            res.status(400).send('signUp failed');
            log(err.message);
        });
};

// Student Authentication
exports.studentAuthentication = (req, res) => {
    const { email, password } = req.params;
    studentProfile.findOne({ email: email, confirmPassword: password }, (err, studentProfile) => {
        err ? log(err.message) : res.json(studentProfile);
    });
};

//get Student-Profile
exports.getStudentProfile = (req, res) => {
    studentProfile.findById(req.params.id, (err, studentProfile) => {
        err ? res.status(404).json(err.message) : res.status(200).json(studentProfile);
    })
};

// courseFeePayment
exports.courseFeePayment = (req, res) => {
    const feeData = new courseFee(req.body);
    feeData.studentId.push(req.params.id);

    feeData.save()
        .then((courseFee) => {
            res.status(200).json({ 'fee': 'course fee payment successfully' });
        })
        .catch(err => {
            res.status(400).send('course fee payment failed');
            log(err.message);
        });
};

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
};


//getCourseFeeYear
exports.getCourseFeeYear = (req, res) => {
    courseFee.find({ studentId: req.params.id }, (err, courseFee) => {
        let year = courseFee.map(data => {
            if (data.feeInfo.feeMode === "Year Wise")
                return data.feeInfo.year;
        })
        res.json(year);
    })
};

//getCourseFeeSemester
exports.getCourseFeeSemester = (req, res) => {
    courseFee.aggregate([
        {
            $match: {
                $and: [
                    { studentId: [mongoose.Types.ObjectId(req.params.id)] },
                    { "feeInfo.feeMode": "Semester Wise" },
                ]
            }
        },
        {
            $group: {

                _id: {
                    year: "$feeInfo.year",
                    // studentId: { $pop: 1 }
                },
                count: {
                    $sum: 1
                }
            }
        }]).exec((err, data) => {
            const semester = data.map(data => {
                if (data.count === 2) return data._id.year
            })
            err ? console.error(err) : res.status(200).json(semester);
        }
        )
};


//receiptCourseFee
exports.receiptCourseFee = (req, res) => {
    courseFee.find({ studentId: req.params.id }).sort({ createdAt: -1 }).exec((err, courseFee) => {
        err ? console.log(err.message) : res.json(courseFee);
    });
};

//receiptCourseFee
exports.receiptBackFee = (req, res) => {
    backFee.find({ studentId: req.params.id }).sort({ createdAt: -1 }).exec((err, backFee) => {
        err ? console.log(err.message) : res.json(backFee);
    });


};

