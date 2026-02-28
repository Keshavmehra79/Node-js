const stuModel=require("../models/stuModel")



const Upload=async(req,res)=>{
    const {rollno,name,city,myimg}=req.body;
    const student=await stuModel.create({
        rollno:rollno,
        name:name,
        city:city,
        img:myimg
    })
    res.send('File Saved')
}

const Display=async(req,res)=>{
    const student=await stuModel.find();
    res.send(student)
}
module.exports={
    Upload,
    Display
}