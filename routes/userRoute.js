const express = require("express");
const getUsers = require("../controllers/users")
const Router = express.Router();

Router.get("/",getUsers)
Router.get("/pro",(req,res)=>{
    res.json({message:"hello from productes"})
})


module.exports = Router