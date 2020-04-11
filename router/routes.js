//Routes - The API routes maps to the Controllers
// List All EndPoints

const express = require('express');
const router = express.Router();
// const controllers = require('../controller/controllers');
const services = require('../service/services')

//signUp route
router.post('/studentSignUp', services.studentSignUp);

//Authentication
router.get("/studentAuthentication/:email/:password", services.studentAuthentication);

//courseFeePayment
router.post("/courseFeePayment", services.courseFeePayment);

module.exports = router;