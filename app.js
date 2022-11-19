

const Express=require("express");
const router=require("./src/routes/api")
const app=new Express();



// security middleware import

const rateLimit=require("express-rate-limit");
const helmet=require("helmet");
const mongoSanitize=require("express-mongo-sanitize");
const xss=require("xss-clean");
const hpp=require("hpp");
const cors=require("cors");
const mongoose = require("mongoose")
const bodyParser=require("body-parser")





// security Middleware impliment


app.use(cors());
app.use(helmet());
app.use(hpp());
app.use(mongoSanitize())
app.use(xss());
//body parser
app.use(bodyParser.json())


// rate Limit

const limiter =rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
})
app.use(limiter)

// MongoDB Database Connection

let URI="mongodb://127.0.0.1:27017/school"
let OPTION={user:'',pass:''}

mongoose.connect(URI,OPTION,(error)=>{
    console.log("Connection success");
    console.log(error)
});


app.use("/api/v1",router)


// undefined route
app.use("*",(req,res)=>{
    res.status(404).end("Not Found")
})
module.exports=app;