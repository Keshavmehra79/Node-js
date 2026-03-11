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

const Myedit=async (req,res)=>{
    const {id}=req.query;
    const Data=await empModel.findById(id);
    res.send(Data)
}

const saveData=async(req,res)=>{
    const {id}=req.query;
   const {empname,empsalary,designation,empcity}=req.body;

    await empModel.findByIdAndUpdate(id,{empname,empsalary,designation,empcity});   
    res.send("Data updated succefully.....")
}

const Search=async(req,res)=>{
    const {city}=req.query;
   const Data= await empModel.find({empcity:city})
     res.send(Data)   
}
module.exports={
    Home,
    Insert,
    display,
    myDel,
    Myedit,
    saveData,
    Search
}