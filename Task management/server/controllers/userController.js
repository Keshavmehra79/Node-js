const Adminmodel=require('../models/adminmodel')

const createAdmin=async(req,res)=>{
    console.log(req.body);
    res.send("Okk")
    
    // const admin=await Adminmodel.create({

    // })
}
const adminLogin=async(req,res)=>{
    const {email,password}=req.body;
    console.log(req.body);
    const admin=await Adminmodel.findOne({email:email});

    if(!admin){
        res.status(400).send({msg:"Invalid email"})
    }

    if(admin.password!=password){
        res.status(400).send({msg:"Invalid password"})
        
    }

    res.send({admin,msg:"Login succefully  "})
    
}

module.exports={
    createAdmin,
    adminLogin
}