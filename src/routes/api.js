const express=require("express");
const ProfileController= require("../controllers/ProfileController");
const AuthVerifyMidleware=require("../middleware/AuthVerifyMidleware")

const router=express.Router();



router.post("/CreateUserProfile",ProfileController.CreateUserProfile)
router.post("/loginUser",ProfileController.loginUser)

// Select Profile or Read Profile
router.get("/SelectProfile",AuthVerifyMidleware,ProfileController.SelectProfile)


module.exports=router;