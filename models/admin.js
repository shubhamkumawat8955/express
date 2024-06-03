const mongoose=require('mongoose');

const adminSchema=new mongoose.Schema({
    name:{type:String,text:true},
    email:{type:String,text:true},
    mobileno:{type:Number,text:true},
    role:{type:Number,text:true},
    password:{type:Number,text:true},
    dob:{type:Number,text:true},
})
module.exports=mongoose.Schema('admin',adminSchema)