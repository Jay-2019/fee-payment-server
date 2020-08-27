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


// get array of branch name
exports.getBranch = (req, res) => {
    branch.find((err, branchList) => {

        let branchName = [];
        for (let data of branchList) {
            branchName = [...branchName, data.branchName]
        };

        err ? log(err.message) : res.status(200).json([...new Set(branchName)]);
    })
};

// Get List of Branch
exports.listBranch = (req, res) => {
    adminAuth.exists({ _id: req.params.adminAuthToken }, (err, result) => {
        if (err) {
            res.json(err);
        };

        if (result) {
            branch.find((err, branchList) => {

                err ? log(err.message) : res.status(200).json(branchList);
            });
        };
    });
};

// Get Particular Branch
exports.getParticularBranch = (req, res) => {
    const { branchId, adminAuthToken } = req.params;
    adminAuth.exists({ _id: adminAuthToken }, (err, result) => {
        if (err) {
            res.json(err);
        };

        if (result) {

            branch.findById(branchId, (err, branchData) => {

                err ? log(err.message) : res.status(200).json(branchData.branchName);
            });
        };
    });
};

// Update Branch
exports.updateTargetBranch = (req, res) => {
    const { branchId, adminAuthToken } = req.params;

    adminAuth.exists({ _id: adminAuthToken }, (err, result) => {
        if (err) {
            res.json(err);
        };

        if (result) {
            branch.findByIdAndUpdate(branchId, req.body, (err, branchData) => {
                err ? log(err.message) : res.status(200).json("branch updated successfully");
            });
        };
    });
};

// delete Branch
exports.deleteBranch = (req, res) => {
    const { branchId, adminAuthToken } = req.params;

    adminAuth.exists({ _id: adminAuthToken }, (err, result) => {
        if (err) {
            res.json(err);
        };

        if (result) {
            branch.findByIdAndRemove(branchId, req.body, (err, branchData) => {
                err ? log(err.message) : res.status(200).json("branch deleted successfully");
            });
        };
    });
};

// create branch
exports.createBranch = (req, res) => {
    const { adminAuthToken } = req.params
    const newBranch = new branch(req.body);

    adminAuth.exists({ _id: adminAuthToken }, (err, result) => {
        if (err) {
            res.json(err);
        };

        if (result) {
            newBranch.save()
                .then(newBranch => {
                    res.status(200).send("new branch successfully created");
                })
                .catch(error => {
                    log(error.message);
                });
        };
    });
};

// Reset Password(Admin) 
exports.resetAdminPassword = (req, res) => {
    const {
        verifiedEmail,
        createPassword,
        confirmPassword,
        securityQuestion,
        securityAnswer
    } = req.body;

    adminAuth.findOneAndUpdate({
        email: verifiedEmail,
        securityQuestion: securityQuestion,
        securityAnswer: securityAnswer
    },
        {
            password: createPassword,
            confirmPassword: confirmPassword
        }, (err, admin) => {
            err ? log(err.message) : res.status(200).json(admin);
        });
};

// Admin Authentication
exports.adminAuthentication = (req, res) => {
    const { email, password } = req.params;

    adminAuth.findOne({
        email: email,
        confirmPassword: password
    }, (err, admin) => {

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
            res.status(200).json(newSubject);
        })
        .catch(error => {
            log(error.message);
        });
};

// get Particular Subject
exports.getTargetSubject = (req, res) => {
    const { subjectId, adminAuthToken } = req.params;

    adminAuth.exists({ _id: adminAuthToken }, (err, result) => {
        if (err) {
            res.json(err);
        };

        if (result) {
            subject.findById(subjectId, (err, subject) => {
                err ? log(err.message) : res.status(200).json(subject);
            })
        }
    })
};

// Update Target Subject
exports.updateTargetSubject = (req, res) => {
    const { subjectId, adminAuthToken } = req.params;

    adminAuth.exists({ _id: adminAuthToken }, (err, result) => {
        if (err) {
            res.json(err);
        };

        if (result) {
            subject.findByIdAndUpdate(subjectId, req.body, (err, subject) => {
                err ? log(err.message) : res.status(200).json("Subject Updated Successfully");
            })
        }
    })
};

// Delete Target Subject
exports.deleteTargetSubject = (req, res) => {
    const { subjectId, adminAuthToken } = req.params;

    adminAuth.exists({ _id: adminAuthToken }, (err, result) => {
        if (err) {
            res.json(err);
        };

        if (result) {
            subject.findByIdAndRemove(subjectId, (err, subject) => {
                err ? log(err.message) : res.status(200).json("Subject Deleted/Removed Successfully");
            })
        }
    })
};

//get Subjects Name
exports.getSubject = (req, res) => {
    const { semester, branch } = req.params;
    subject.find({ semester: semester, branch: branch }, (err, subject) => {
        let subjectName = subject.map(data => data.subjectName);
        err ? log(err.message) : res.status(200).json([...new Set(subjectName)]);
    })
};

// get Filter Subjects Data
exports.filterSubject = (req, res) => {
    const { branch, semester, subjectType } = req.params;
    subject.find({
        semester: semester,
        branch: branch,
        subjectType: subjectType
    }, (err, subjectData) => {

        err ? log(err.message) : res.status(200).json(subjectData);
    })
};

// set(update) courseFee Due Date
exports.updateCourseFeeDueDate = (req, res) => {
    const { documentId, adminAuthToken } = req.params;
    let newDates = new courseFeeDueDate(req.body);
    const { caste, firstYear, secondYear, thirdYear, fourthYear } = newDates;

    adminAuth.exists({ _id: adminAuthToken }, (err, result) => {
        if (err) {
            res.json(err);
        };

        if (result) {


            courseFeeDueDate.findByIdAndUpdate(documentId, {
                caste,
                firstYear,
                secondYear,
                thirdYear,
                fourthYear
            }, (err, courseFeeDueDate) => {
                err ? log(err.message) : res.status(200).json(courseFeeDueDate);
            });

        };
    });
};

// get courseFee Due Date
exports.getCourseFeeDueDate = (req, res) => {
    const { adminAuthToken } = req.params;
    adminAuth.exists({ _id: adminAuthToken }, (err, result) => {
        if (err) {
            res.json(err);

        } else {
            courseFeeDueDate.find((err, courseFeeDueDate) => {
                err ? log(err.message) : res.status(200).json(courseFeeDueDate);
            });
        }

    })
};

// set(update) courseFeeType
exports.updateCourseFeeType = (req, res) => {
    courseFeeType.findByIdAndUpdate(req.params.id, req.body, (err, courseFeeType) => {
        err ? log(err.message) : res.json(courseFeeType);
    });
};

// get courseFeeType
exports.getCourseFeeType = (req, res) => {
    courseFeeType.findById(req.params.id, (err, courseFeeType) => {
        err ? log(err.message) : res.status(200).json(courseFeeType);
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
        err ? log(err.message) : res.status(200).json(backFeeType);
    });
};

//get backFeeType
exports.getBackFeeType = (req, res) => {
    backFeeType.findById(req.params.id, (err, backFeeType) => {
        err ? log(err.message) : res.status(200).json(backFeeType);
    });
};


//set(update) backFee-Due-Date
exports.updateBackFeeDueDate = (req, res) => {
    const { documentId, adminAuthToken } = req.params;
    const newDates = backFeeDueDate(req.body);
    const { firstSemester,
        secondSemester,
        thirdSemester,
        fourthSemester,
        fifthSemester,
        sixthSemester,
        seventhSemester,
        eighthSemester } = newDates;

    adminAuth.exists({ _id: adminAuthToken }, (err, result) => {
        if (err) {
            res.json(err);
        };

        if (result) {
            backFeeDueDate.findByIdAndUpdate(documentId, {
                firstSemester,
                secondSemester,
                thirdSemester,
                fourthSemester,
                fifthSemester,
                sixthSemester,
                seventhSemester,
                eighthSemester
            }, (err, backFeeDueDate) => {
                err ? log(err.message) : res.status(200).json(backFeeDueDate);
            });
        };
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
            res.status(200).json(studentSignUp);
        })
        .catch(err => {

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
        err ? log(err.message) : res.status(200).json(studentProfile);
    })
};

exports.updateStudentProfile = (req, res) => {
    studentProfile.findByIdAndUpdate(req.params.id, req.body, (err, updateProfile) => {
        err ? log(err.message) : res.status(200).json(updateProfile);
    });
};

// courseFeePayment
exports.courseFeePayment = (req, res) => {
    const feeData = new courseFee(req.body);
    feeData.studentId.push(req.params.id);

    feeData.save()
        .then((courseFee) => {
            res.status(200).json(courseFee);
        })
        .catch(err => {
            log(err.message);
        });
};

// backFeePayment
exports.backFeePayment = (req, res) => {
    const feeData = new backFee(req.body);
    feeData.studentId.push(req.params.id);
    feeData.save()
        .then((backFee) => {
            res.status(200).json(backFee);
        })
        .catch(err => {
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
        err ? log(err) : res.json(year);
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
            err ? error(err) : res.status(200).json(semester);
        }
        )
};


//receiptCourseFee
exports.receiptCourseFee = (req, res) => {
    courseFee.find({ studentId: req.params.id }).sort({ createdAt: -1 }).exec((err, courseFee) => {
        err ? log(err.message) : res.json(courseFee);
    });
};

//receiptCourseFee
exports.receiptBackFee = (req, res) => {
    backFee.find({ studentId: req.params.id }).sort({ createdAt: -1 }).exec((err, backFee) => {
        err ? log(err.message) : res.json(backFee);
    });

};