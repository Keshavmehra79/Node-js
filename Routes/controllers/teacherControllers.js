const firstpage=(req,res)=>{
    res.send("<h1>first page,</h1>")
}
const home=(req,res)=>{
    res.send("<h1>Home page,</h1>")
}
const about=(req,res)=>{
    res.send("<h1>About page,</h1>")
}
const fees=(req,res)=>{
    res.send("<h1>Fees page,</h1>")
}


module.exports={
    firstpage,
    home,
    about,
    fees
}