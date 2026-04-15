import express from "express";
import web from "./routes/web.js"
import session from "express-session";
import cors from "cors"
import bodyParser from "body-parser";
const app=express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: "http://localhost:5173", // your React app URL
    credentials:true
}));

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