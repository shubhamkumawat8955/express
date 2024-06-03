const mongoose = require("mongoose");

const studentSchema=new mongoose.Schema({
    name:{type:String,text:true},
    lname:{type:String,text:true},
    email:{type:String,text:true},
    password:{type:String,text:true}
})
module.exports=mongoose.Schema('student',studentSchema);

 