const express = require("express")
require("dotenv").config()

const server = express();

const UserRoutes = require("./routes/userRoute")

server.use('/api/',UserRoutes)
if(process.env.NODE_ENVIREMENT == 'pro'){
    console.log("hello")
}else{
    console.log('====================================');
    console.log("dev");
    console.log('====================================');
}


server.listen(process.env.PORT,()=>{
    console.log('====================================');
    console.log(`server runing on port ${process.env.PORT}`);
    console.log('====================================');
})