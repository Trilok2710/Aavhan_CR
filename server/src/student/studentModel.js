var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var studentSchema = new Schema({

    firstname: {
        type: String,
        required: true
    },
    phone:{
        type:String,
        required:true,
        unique:true
    },
    email: {
        type: String,
        required: true
    },
    college:{
        type:String,
        required:true
    },
    yos:{
        type:String,
        required:true
    },
    password: {
        type: String,
        required: true
    },
    profileImageUrl:{
        type:String
    }

});

module.exports = mongoose.model('student', studentSchema);