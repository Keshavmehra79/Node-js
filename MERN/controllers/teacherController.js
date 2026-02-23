const homepage=(req,res)=>{
    res.send("<h1>This is Home page</h1>")
}

const about=(req,res)=>{
    res.send("<h1>This is About page</h1>");
}

const deptpage=(req,res)=>{
    res.send(("<h1>This is Deptpage</h1>"))
}

const salarypage=(req,res)=>{
    res.send("<h1>this is salarypage</h1>")
}

module.exports={
    homepage,
    about,
    deptpage,
    salarypage
}