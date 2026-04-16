import express from "express";
import web from "./routes/web.js"
import session from "express-session";
import cors from "cors"
import cookieParser from "cookie-parser";
const app=express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: "http://localhost:5173", // your React app URL
    credentials:true
}));

app.use(cookieParser());

app.use(session(
    {
        key:"keshav",
        secret:"keshav123",
        resave:false,
        saveUninitialized:false,
        cookie:{
            maxAge:1000*60*60 //1 hour
        }


    }
))




app.use("/session",web)

app.listen(8000,()=>{
    console.log("Server run on 80000 port")
})

// const EventEmiter=require("events");
// const event=new EventEmiter();

// event.on("doorbell",(val)=>{
//     if(val=="raj"){
//         console.log("Just wait i am coming.....")
//     }
// })

// event.on("doorbell",(val)=>{
//     console.log("This is another event")
// })

// event.on("doorbell",(val)=>{
//     console.log("This is other event")
// })

// event.emit("doorbell","raj")

// let fs=require("fs");
// let rs =fs.createReadStream("../raj.txt");
// rs.on("open",()=>{
//     console.log("File is open")
// })
