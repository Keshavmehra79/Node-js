const stuModel=require("../models/stuModel")

const home=(req,res)=>{
    res.send("Working........")
}


const saveData=async (req,res)=>{
const {rollno,name,city,fees} =req.body;
    const student=await stuModel.create({
        rollno:rollno,
        name:name,
        city:city,
        fees:fees
    })
    res.send("Data inserted Succefully")     
}

const display=async (req,res)=>{
const studata=await stuModel.find();
res.send(studata)
}

const MyDelete = async(req, res) => {
    const {id}=req.query;
    await stuModel.findByIdAndDelete(id);
    res.send({message:"Data Deleted succefully!"});
};



module.exports={
    home,
    saveData,
    display,
    MyDelete
}