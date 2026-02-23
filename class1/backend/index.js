const express=require("express");
const app=express();
const cors=require('cors')
const bodyparser = require('body-parser')

app.use(bodyparser.json())
// Body-parser middleware
app.use(bodyparser.urlencoded({ extended: true }))

app.use(cors())


app.get('/home',(req,res)=>{
        console.log("This is Home page.....");
        res.send('Wellcome to home page')   
})

app.post('/about',(req,res)=>{
    const {name}=req.body;
    console.log(name)
    res.send("Data posted")
})

app.get("/service",(req,res)=>{
    const {nm}=req.query;
    console.log(nm);
    
    res.send("This is service page");
})

app.listen(9000,(req,res)=>{
    console.log('Server run on 9000 port......')
})