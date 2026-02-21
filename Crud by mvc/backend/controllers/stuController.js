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

const myedit=async(req,res)=>{
    const {id}=req.query;
        const data=await stuModel.findById(id)        
         res.send(data)
}

const myupdate=async(req,res)=>{
    const{  _id,rollno,name,city,fees}=req.body;
    await stuModel.findByIdAndUpdate(_id,{rollno,name,city,fees});
    res.send("Data updated succefully \\\\")
}

const search=async(req,res)=>{
    const {rollno}=req.query;
    const student=await stuModel.find({rollno:rollno}) 
    res.send(student)
}
module.exports={
    home,
    saveData,
    display,
    MyDelete,
    myedit,
    myupdate,
    search
}