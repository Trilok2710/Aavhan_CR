const mongoose = require('mongoose');
const nodemailer = require("nodemailer");
const constants = require('./constants.json');

function sendMail(user, message,reciever_list){
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: constants.email_details.email,
        pass: constants.email_details.password
      }
    });

    var recievers="";

    for(var i in reciever_list){
      recievers += reciever_list[i] + " ,";
    }

    let mailOptions = {
    from: `IITB Sports`+ constants.email_details.email,
    to: recievers,
    subject: "Contact Form Response",
    html: `<h2>Personal Details:</h2>
        <p><strong>Name: </strong>${user.name}</p>
        <p><strong>Roll Number: </strong>${user.rollNumber}</p>
        <h2>Complaint/Enquiry Details:</h2>
        <p><strong>Complaint Type: </strong>${user.type}</p>
        <p><strong>Description: </strong>${user.details}</p>`+ message
      };
      
    transporter.sendMail(mailOptions,function(err){
      if (err) {
        return err;
      } 

    });
}
        
    

function askASecy(request,response){

  var sender = request.body.sender;
  var reciever_list = request.body.reciever_list;
  var message = request.body.message;

  sendMail(sender,message,reciever_list,function(err,info){
    if(err) response.status(500).send(err);
    else response.json(info);
  
  });
  


}

module.exports={sendMail,askASecy};

