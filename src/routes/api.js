const express=require("express");
const ProfileController= require("../controllers/ProfileController");
const AuthVerifyMiddlewarel=require("../middleware/AuthVerifyMiddlewarel")

const router=express.Router();



router.post("/CreateUserProfile",ProfileController.CreateUserProfile)
router.post("/loginUser",ProfileController.loginUser)

// Select Profile or Read Profile
router.get("/SelectProfile",AuthVerifyMiddlewarel,ProfileController.SelectProfile)


module.exports=router;