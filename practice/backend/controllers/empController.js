const empModel=require("../models/empModel")
const Home=(req,res)=>{
    res.send("working.......")
}

const Insert=async(req,res)=>{
       const {  name,  salary, designation,city}=req.body;
       const employee=await empModel.create({
        empname:name,
        empsalary:salary,
        designation:designation,
        empcity:city
       })
    res.send("Data sent succefully") 
}

const display=async (req,res)=>{
    const empdata=await empModel.find();
    res.send(empdata);
}

const myDel=async(req,res)=>{
    const {id}=req.query;
   await empModel.findByIdAndDelete(id)
    res.send("Deleted succefully.....")
}
module.exports={
    Home,
    Insert,
    display,
    myDel
}