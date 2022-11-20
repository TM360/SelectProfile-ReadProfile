const ProfileCreateModel =require("../models/ProfileModel")

const jwt = require('jsonwebtoken');


exports.CreateUserProfile=(req,res)=>{
    let reqBody=req.body;
    ProfileCreateModel.create(reqBody,(err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }
        else {
            res.status(200).json({status:"success",data:data})
        }
    })
}


// Login user

exports.loginUser=(req,res)=>{
    let UserName=req.body["UserName"]
    let Password=req.body["Password"]


    ProfileCreateModel.find({UserName:UserName,Password:Password},function (err,data){
        if(err){
            res.status(400).json({status:"fail",data:err})
        }
        else {
            if(data.length>0){
                // create token
                let payload={
                    exp: Math.floor(Date.now() / 1000) + (60 * 60),
                    data:data[0]
                }

                let token=jwt.sign(payload,"SecretKey123456789")
                res.status(200).json({status:"success ",token:token,data:data[0]})
            }
            else {
                res.status(400).json({status:"unAuthorized"})
            }
        }
    })

    }



// Read User Profile or Select User Profile

exports.SelectProfile=(req,res)=>{
    let UserName=req.headers['username']
    ProfileCreateModel.find({UserName:UserName},(err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }
        else {
            res.status(200).json({status:"success done",data:data})
        }
    })
}



