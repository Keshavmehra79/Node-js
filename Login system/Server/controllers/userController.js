const userModel = require("../models/userModel");
const bcrypt=require("bcrypt")
const jwt =require("jsonwebtoken")
const createUser=async(req,res)=>{
    const {  name,email,password}=req.body;
    const salt=await bcrypt.genSalt(10);
    const newPassword=await bcrypt.hash(password,salt)

    console.log(newPassword)
    const user=await userModel.create({
        name:name,
        email:email,
        password:newPassword
    })
    res.send("User Succefully created..")
}

const userlogin=async(req,res)=>{
    const { email, password}=req.body;
    const user=await userModel.findOne({email:email})
    
   if(!user){
    res.status(400).send("Invalid email")
   }

   const isMatch=await bcrypt.compare(password,user.password)
    if(!isMatch){
        res.status(400).send("Invalid password")
    }   

    const token=await jwt.sign({id:user._id},"keshav1234",{expiresIn:"30 days"});

    res.status(200).send({token:token})
}

const userAuth=async(req,res)=>{
    const token=req.header("mytoken")
    const verified=await jwt.verify(token,"keshav1234")
    const user=await userModel.findById(verified.id)
    res.status(200).send({user})
}

module.exports={
    createUser,
    userlogin,
    userAuth
}