const stuModel=require("../models/stuModel")

const home=(req,res)=>{
    res.render("home");
}
const about=(req,res)=>{
    res.render("about");
}
const service=(req,res)=>{
    res.render("service");
}
const contact=(req,res)=>{
    res.render("contact");
}
const datasave=async (req,res)=>{
    console.log(req.body)
    const {rollno,name,city,fees}=req.body;
    const student=await stuModel.create({
        rollno:rollno,
        name:name,
        city:city,
        fees:fees
    })
    res.render("about")
}

const servicepage=async (req,res)=>{
    const student=await stuModel.find();
    res.render("service",{Data:student});
}
module.exports={
    home,
    about,
    contact,
    service,
    datasave,
    servicepage
}