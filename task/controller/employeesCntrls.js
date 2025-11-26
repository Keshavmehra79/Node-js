const firstpage=(req,res)=>{
    res.send("<h1>This is first page....</h1>")
}
const home=(req,res)=>{
    res.send("<h1>This is home page....</h1>")
}
const designation=(req,res)=>{
    res.send("<h1>This is designation page....</h1>")
}
const department=(req,res)=>{
    res.send("<h1>This is department page...</h1>.")
}
const addresss=(req,res)=>{
    res.send("<h1>This is address page....</h1>")
}

const contact=(req,res)=>{
    res.send("<h1>This is contact page....</h1>")
}

module.exports={
    firstpage,
    home,
    designation,
    department,
    addresss,
    contact
}