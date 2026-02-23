const home=(req,res)=>{
    res.send("<h1>This is emp home</h1>")
}

const about=(req,res)=>{
    res.send("<h1>This is emp about</h1>");
}

const dept=(req,res)=>{
    res.send("<h1>This is Emp dept....</h1>")
}

const salary=(req,res)=>{
    res.send("<h1>This is emp Salary</h1>")
}

module.exports={
    home,
    about,
    dept,
    salary
}