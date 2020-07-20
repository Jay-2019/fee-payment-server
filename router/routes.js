//Routes - The API routes maps to the Controllers
// List All EndPoints

const express = require('express');
const router = express.Router();
// const controllers = require('../controller/controllers');
const services = require('../service/services');

// Create-New-Branch 
router.post('/createBranch', services.createBranch);

// Create-New-Branch 
router.get('/getBranch', services.getBranch);

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

// get SubjectName
router.get('/getSubject/:semester/:branch', services.getSubject);

// set(update) courseFee-Due-Date
router.post('/updateCourseFeeDueDate/:id', services.updateCourseFeeDueDate);

// get courseFee-Due-Date
router.get('/getCourseFeeDueDate/:id', services.getCourseFeeDueDate);

// set(update) courseFee-Type
router.post('/updateCourseFeeType/:id', services.updateCourseFeeType);

// get courseFeeType
router.get('/getCourseFeeType/:id', services.getCourseFeeType);

//set(update) backFee-Type
router.post('/updateBackFeeType/:id', services.updateBackFeeType);

// get backFeeType
router.get('/getBackFeeType/:id', services.getBackFeeType);

//set(update) backFee-Due-Date
router.post('/updateBackFeeDueDate/:id', services.updateBackFeeDueDate);

//get BackFee-DueDate
router.get('/getBackFeeDueDate/:id', services.getBackFeeDueDate);

//signUp route
router.post('/studentSignUp', services.studentSignUp);

//Student Authentication
router.get("/studentAuthentication/:email/:password", services.studentAuthentication);

// get Student-Profile
router.get("/getStudentProfile/:id", services.getStudentProfile);

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