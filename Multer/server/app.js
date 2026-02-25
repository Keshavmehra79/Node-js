const express=require("express");
const app=express();
const stuRoute=require("./routes/stuRoute")
const cors=require("cors");
app.use(cors())
const bodyparser=require("body-parser")

app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())

app.use("/students",stuRoute)
app.listen(9000,()=>{
    console.log("Server on port 9000!")
})