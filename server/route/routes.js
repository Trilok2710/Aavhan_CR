var express = require('express');

var studentController = require('../src/student/studentController.js');
const router = express.Router();

router.route('/student/login').post(studentController.loginUserControllerFn);
router.route('/student/create').post(studentController.createStudentControllerFn);
router.route('/getUserDetails').get(studentController.getUserDetails);
module.exports = router;

