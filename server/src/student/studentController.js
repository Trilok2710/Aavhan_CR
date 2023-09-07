const express =require('express');//new
const studentModel=require('./studentModel')
var studentService = require('./studentService');
const jwt = require('jsonwebtoken');//hhh
const secretKey ='nhbgvbhygmjhgfcvghg';//hhh
const nodemailer = require('nodemailer');
async function createStudentControllerFn(req, res) {
  try {
    console.log(req.body);
    var status = await studentService.createStudentDBService(req.body);
    console.log("new user registered");
    console.log(status);

    if (status) {
      res.send({ "status": true, "message": "Student created successfully" });
      // sendRegistrationEmail(req.body.email);
    } else {
      res.send({ "status": false, "message": "Error creating user" });
    }
  }
  catch (err) {
    console.log(err);
  }
}
async function sendRegistrationEmail(userEmail){
  
  try{
    const transporter =nodemailer.createTransport({
      service:'mail.google.com',
      auth:{
        user:'rajkachori27@gmail.com',
        pass:'jgswrncbkgrwxfnv'
      }
    });

    const mailOptions={
      from:'rajkachori27@gmail.com',
      to:userEmail,
      subject:'Registration Successful',
      html:'<p>your reg was successful.Welcome to our platforn!<p>'
    };
    const info =await transporter.sendMail(mailOptions);
    console.log('Email sent:'+ info.response);
  }catch(error){
    console.error('Email error:'+error);
  }
}


var loginUserControllerFn = async (req, res) => {
  console.log("heheheheheheh");
  //console.log(req.body);
    var result = null;
    try {
        result = await studentService.loginuserDBService(req.body);
        //console.log(result);
        if (result.status) {
            const user = {
                id: result.userDetails._id,
                email: req.body.email
            };
            //console.log(user);
            const token = jwt.sign(user, secretKey, { expiresIn: '1h' }); // Set token expiry time
            console.log(token);
            res.send({ "status": true, "message": result.msg, "token": token });
        } else {
            res.send({ "status": false, "message": result.msg });
        }
      }
         catch (error) {
        console.log(error);
        res.send({ "status": false, "message": error.msg });
    }
}//hhh



// const student = require('./studentModel'); // Adjust the path to your user model

async function getUserDetails(req, res) {
  console.log("working fine")
  //console.log(req.headers);
  const tokenFromRequest = req.headers.authorization.split(' ')[1]; // Get token from request header

  try {
    const decodedToken = jwt.verify(tokenFromRequest, secretKey);
    const userId = decodedToken.id;
    // Fetch user details from the database based on userId
    const student = await studentModel.findById(userId);
    console.log(student);
    if (student) {
      res.json({ userDetails: student });
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(401).json({ message: 'Unauthorized' });
  }
}

module.exports = { createStudentControllerFn,loginUserControllerFn, getUserDetails };



















