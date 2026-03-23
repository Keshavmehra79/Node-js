const empModel=require("../models/empModel")
const bcrypt=require("bcrypt");
const jwt =require("jsonwebtoken")


    const Login=async(req,res)=>{
        const {email, password}=req.body;
        const user=await empModel.findOne({email:email})
        const isMatch=await bcrypt.compare(password,user.password)
        console.log(user)
        if(!user){
            res.status(400).send("Invalid email")
        }  
        if(!isMatch){
            res.status(400).send("Invalid password")
        } 
        
        const token=await jwt.sign({id:user._id},'mehra123',{expiresIn:"30 days"})
        
        
        res.status(200).send({token:token})
    }


const Signup=async(req,res)=>{
    const { name,salary,email,password}=req.body;
    const salt=await bcrypt.genSalt(10)
    const newPassword=await bcrypt.hash(password,salt);
    const employee=await empModel.create({
          empname:name,
         empsalary:salary,
            email:email,
            password:newPassword
    })
    res.send("okk")
    
}

const userAuth=async(req,res)=>{
    const token=await req.header("token")
    const verified=await jwt.verify(token,"mehra123")    
    const user=await empModel.findById(verified.id);
    res.status(200).send({user})
}

module.exports={
    Signup,
    Login,
    userAuth
}