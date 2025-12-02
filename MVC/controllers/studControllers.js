const stuModels = require("../models/stuModels");
const StuModel=require("../models/stuModels");



const mainpage=(req,res)=>{
    res.render("home")
}
const home=(req,res)=>{
    res.render("home")
}
const about=(req,res)=>{
    res.render("about")
}
const contact=(req,res)=>{
    res.render("contact")
}
const service=(req,res)=>{
    res.render("service")
}

const datasave=async(req,res)=>{
    const { rollno,name,city,fees}=req.body;
    const student=await StuModel.create({
        rollno:rollno,
        name:name,
        city:city,
        fees:fees
    })
    res.render("about")
}

const servicePage=async (req,res)=>{
    const student=await StuModel.find();
    res.render("service",{Data:student});
}

const searchpage=(req,res)=>{
    res.render("search",{Data:[]})
}

const searchdata= async(req,res)=>{

    const {rollno}=req.body;
    
    const   employee=await stuModels.find({rollno:rollno}); 
    res.render("search",{Data:employee});

}

module.exports={
    mainpage,
    home,
    about,
    contact,
    service,
    datasave,
    servicePage,
    searchpage,
    searchdata
}