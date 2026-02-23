const home=(req,res)=>{
    res.send("<h1>This is Prodct home</h1>")
}

const sale=(req,res)=>{
    res.send("<h1>This is product sale</h1>")
}

const purchase=(req,res)=>{
    res.send("<h1>This is purchase</h1>")
}

const stock=(req,res)=>{
    res.send("<h1>This is Stock</h1>")
}

module.exports={
    home,
    sale,
    purchase,
    stock
}