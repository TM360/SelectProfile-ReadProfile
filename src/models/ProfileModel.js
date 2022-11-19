
const mongoose=require("mongoose");

const DataSchema = mongoose.Schema({

    FirstName:{type:String},
    LastName:{type:String},
    Email:{type:String},
    Mobile:{type:String},
    UserName:{type:String},
    Password:{type:String}

},{versionKey:false})


const ProfileCreateModel= mongoose.model('students',DataSchema)
module.exports=ProfileCreateModel;