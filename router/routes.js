//Routes - The API routes maps to the Controllers
// List All EndPoints

const express = require('express');
const router = express.Router();
// const controllers = require('../controller/controllers');
const services = require('../service/services')

//faculty Admin Routes
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


//set(update) backFee-Due-Date
router.post('/updateBackFeeDueDate/:id', services.updateBackFeeDueDate);

//signUp route
router.post('/studentSignUp', services.studentSignUp);

//Authentication
router.get("/studentAuthentication/:email/:password", services.studentAuthentication);

//courseFeePayment
router.post("/courseFeePayment/:id", services.courseFeePayment);

//backFeePayment
router.post("/backFeePayment/:id", services.backFeePayment);

//getCourseFeeYear
router.get("/getCourseFeeYear/:id", services.getCourseFeeYear);

//receiptCourseFee
router.get("/receiptCourseFee/:id", services.receiptCourseFee);

//get  backFeeAttempt
router.get("/receiptBackFee/:id", services.receiptBackFee);

// router.get("/backFeeAttempt/:id/:subject", services.backFeeAttempt);

module.exports = router;