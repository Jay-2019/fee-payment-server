//Routes - The API routes maps to the Controllers
// List All EndPoints

const express = require('express');
const router = express.Router();
// const controllers = require('../controller/controllers');
const services = require('../service/services');

// get Filter Subjects Data
router.get('/filterSubject/:branch/:semester/:subjectType', services.filterSubject);

// Create-New-Branch 
router.post('/createBranch/:adminAuthToken', services.createBranch);

// Get List of Branch Name
router.get('/getBranch', services.getBranch);

// Get List of Branch
router.get('/listBranch/:adminAuthToken', services.listBranch);

// Get Particular Branch Name
router.get('/getParticularBranch/:branchId/:adminAuthToken', services.getParticularBranch);

// update Branch
router.post('/updateTargetBranch/:branchId/:adminAuthToken', services.updateTargetBranch);

// delete Branch
router.delete('/deleteBranch/:branchId/:adminAuthToken', services.deleteBranch);

// resetAdminPassword
router.post("/resetAdminPassword", services.resetAdminPassword);

//Admin Authentication
router.get("/adminAuthentication/:email/:password", services.adminAuthentication);

//get particular feeDetails of courseFee 
router.get('/courseFeeData/:id', services.getCourseFeeData);

//get particular feeDetails of courseFee 
router.get('/backFeeData/:id', services.getBackFeeData);

//set, Create-New-Subject 
router.post('/createSubject', services.createSubject);

//set, Update Subject 
router.post('/updateTargetSubject/:subjectId/:adminAuthToken', services.updateTargetSubject);

//set, delete Subject 
router.delete('/deleteTargetSubject/:subjectId/:adminAuthToken', services.deleteTargetSubject);

//get, get Particular Subject 
router.get('/getTargetSubject/:subjectId/:adminAuthToken', services.getTargetSubject);

// get SubjectName
router.get('/getSubject/:semester/:branch', services.getSubject);

// set(update) courseFee-Due-Date
router.post('/updateCourseFeeDueDate/:documentId/:adminAuthToken', services.updateCourseFeeDueDate);

// get courseFee-Due-Date
router.get('/getCourseFeeDueDate/:adminAuthToken', services.getCourseFeeDueDate);

// set(update) courseFee-Type
router.post('/updateCourseFeeType/:id', services.updateCourseFeeType);

// get courseFeeType
router.get('/getCourseFeeType/:id', services.getCourseFeeType);

//set(update) backFee-Type
router.post('/updateBackFeeType/:id', services.updateBackFeeType);

// get backFeeType
router.get('/getBackFeeType/:id', services.getBackFeeType);

//set(update) backFee-Due-Date
router.post('/updateBackFeeDueDate/:documentId/:adminAuthToken', services.updateBackFeeDueDate);

//get BackFee-DueDate
router.get('/getBackFeeDueDate/:id', services.getBackFeeDueDate);

//signUp route
router.post('/studentSignUp', services.studentSignUp);

//Student Authentication
router.get("/studentAuthentication/:email/:password", services.studentAuthentication);

// get Student-Profile
router.get("/getStudentProfile/:id", services.getStudentProfile);

//update student Profile
router.post("/updateStudentProfile/:id", services.updateStudentProfile);

//courseFeePayment
router.post("/courseFeePayment/:id", services.courseFeePayment);

//backFeePayment
router.post("/backFeePayment/:id", services.backFeePayment);

//getCourseFeeYear
router.get("/getCourseFeeYear/:id", services.getCourseFeeYear);

//getCourseFeeSemester
router.get("/getCourseFeeSemester/:id", services.getCourseFeeSemester);

//receiptCourseFee
router.get("/receiptCourseFee/:id", services.receiptCourseFee);

//get  backFeeAttempt
router.get("/receiptBackFee/:id", services.receiptBackFee);

// router.get("/backFeeAttempt/:id/:subject", services.backFeeAttempt);

module.exports = router;