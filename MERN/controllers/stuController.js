const stuModel=require("../models/stuModel")

const Home=(req,res)=>{
    res.render("Home")
}

const About=(req,res)=>{
    res.render("About")
}

const Faculty=(req,res)=>{
    res.render("Faculty")
}
const Course=(req,res)=>{
    res.render("Courses")
}
const Contact=(req,res)=>{
    res.render("Contact")
}


module.exports={
    Home,
    About,
    Faculty,
    Course,
    Contact
}