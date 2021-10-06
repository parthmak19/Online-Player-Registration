const jwt = require("jsonwebtoken");
const mongoose = require('mongoose');

const UserSchema3  = new mongoose.Schema({
  name:{
      type  : String,
      required : true
     } ,
    email:{
        type  : String,
        required : true
    },
    regards:{
        type  : String,
        required : true
    }
});


const Regards = mongoose.model('regards',UserSchema3);

module.exports = Regards;