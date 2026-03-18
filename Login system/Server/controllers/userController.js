const mongoose=require("mongoose");
const userModel = require("../models/userModel");

const createUser=async(req,res)=>{
    const {  name,email,password}=req.body;
    const user=await userModel.create({
        name:name,
        email:email,
        password:password
    })
    res.send("User Succefully created..")
}

const userlogin=async(req,res)=>{
    const { email, password}=req.body;
    const user=await userModel.findOne({email:email})
    
   if(!user){
    res.status(400).send("Invalid email")
   }

   if(user.password!=password){
    res.status(400).send("Invalid password")
   }


    res.status(200).send({user:user,msg:"Logged in Succefully"})


}

module.exports={
    createUser,
    userlogin
}