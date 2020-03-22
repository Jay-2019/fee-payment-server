//Routes - The API routes maps to the Controllers
// List All EndPoints

const express = require('express');
const router = express.Router();
// const controllers = require('../controller/controllers');
const services = require('../service/services')

//signUp route
router.post('/studentSignUp', services.studentSignUp);




module.exports = router;