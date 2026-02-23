const express=require("express");
const app= express();
const bodyparser = require('body-parser')
const cors=require("cors")
const mongoose=require("mongoose")
const route=require("./routes/stuRoutes")
// Body-parser middleware
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())

app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/db2").then(()=>{
    console.log('db connected......')
})


app.use('/students',route)
app.listen(8000,()=>{
    console.log("Server running.......")
})