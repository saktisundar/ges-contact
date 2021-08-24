const { text } = require("express");
const mongoose = require("mongoose");
const validator = require("validator");


const userSchema = mongoose.Schema({
    name:{
        type : String,
        required : true,
        minLength : 3
    },
    email:{
        type : String,
        required : true,
    },
    Password:{
        type : String,
        required : true
        //minLength : 3
    },
    phone:{
        type : String,
        required : true,
        min:10
    },
    message:{
        type : String,
        required : true,
        min:10
    }
})

//we need to creat a Collection
const User = mongoose.model("contact" , userSchema);

module.exports = User;