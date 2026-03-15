require("dotenv").config();
const express=require("express");
const app=express();
const mongoose=require("mongoose")
const stuRoute=require("./routes/stuRoute")
const cors=require("cors");
app.use(cors())
const bodyparser=require("body-parser")

app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())
mongoose.connect(process.env.DATABASE_URL).then(()=>{
    console.log("Db connected succefully")
})




app.use("/students",stuRoute)

/////////ERROR HANDLING
// app.get("/home",(req,res)=>{
//     // throw new Error("Error");
//     console.log("Home");
//     // res.send("okk")
//     res.status(400).send("Server me error hai")
// })
// app.get("/about",(req,res)=>{
//     console.log("About");
//     res.send("About page")
// })

// app.use((err,req,res,next)=>{
//     console.error(err)
// })

// app.listen(4000,()=>{
//     console.log("server run on 4000 port ");
    
// })
app.listen(process.env.PORT,()=>{
    console.log("Server on port 9000!")
})