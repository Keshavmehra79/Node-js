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

module.exports={
    mainpage,
    home,
    about,
    contact,
    service

}