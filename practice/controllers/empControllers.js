const empModel=require("../models/empModel");


const home=(req,res)=>{
    res.render("home")
}
const insert=(req,res)=>{
    res.render("insert")
}


const datasave=async (req,res)=>{
const {idnm,nam,desg,slr}=req.body;
console.log(req.body)
const employee=await empModel.create({
    empid:idnm,
    empname:nam,
    designation:desg,
    salary:slr
})
}


const display=async (req,res)=>{
    const empdata=await empModel.find();
    res.render("display",({Data:empdata}));
}

module.exports={
        home,
        insert,
        datasave,
        display,
        display 
}