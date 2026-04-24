
// const express=require("express");
// const app=express();
// const empRoute=require("./routes/empRouter")
// const mongoose=require("mongoose");
// const cors=require("cors");
// const bodyparser=require("body-parser")
// const cookieParser=require("cookie-parser")
// app.use(cors({
//     origin: "http://localhost:5173", // your React app URL
//     credentials:true
// }));
// // Body-parser middleware
// app.use(bodyparser.urlencoded({ extended: true }))
// app.use(bodyparser.json())
// mongoose.connect("mongodb://127.0.0.1:27017/JWT").then(()=>{
//     console.log("Db connected succefully");
// })  

// app.use(cookieParser());



// // app.use("/employees",empRoute);

// app.post("/createcookie",(req,res)=>{
//     const {name,email}=req.body
//     res.cookie("name",name,{maxAge:60*1000})
//     res.cookie("email",email,{maxAge:60*1000})
//     res.send("Cookie value set")
// })


// app.get("/getcookie",(req,res)=>{
//   const  { name, age }=req.cookies;
//   res.send("my name is"+name);
 
// })

// app.get("/deletecookie",(req,res)=>{

//     res.clearCookie('name');
//     res.send("Cookie deleted ")
// })



// app.listen(4000,()=>{
//     console.log("server run on 4000 port ");
    
// })


// // import express from "express";
// // const app=express();
// // import web from "./routes/web.js"
// // i


// // app.use("/session",web)


// app.listen(2000,(req,res)=>{
//     console.log("Server run 2000 port")
// })


// const express=require("express");
// const http=require("http");
// const {Server}=require("socket.io");
// const cors=require("cors");
// const app=express();
// app.use(cors());

// const server=http.createServer(app);

// const io=new Server(server,{
//     cors:{
//         origin:'http://localhost:5173',
//         methods:['GET','POST']
//     }
// })

// io.on("connection",(socket)=>{
//     console.log(`Socket Connection stablished ID: ${socket.id}`)
//     socket.on("send_message",(data)=>{
//         console.log(data);
//     io.emit('receive_message',data)
//     })

// })

// server.listen(5000,()=>{
//     console.log("Server run 5000 port")
// })



///
//create methid to create bufeer
const buffer1=Buffer.alloc(100);
const buffer2=new Buffer("cybrom");
const buffer3=Buffer.from([1,2,3,4]);

//writing data to bufffer
buffer1.write("Happy birthday");

//reading data from buffer
const a=buffer1.toString('utf-8');

//check object is buffer or not
// console.log(Buffer.isBuffer(buffer1))
// console.log(a);

// \//check length of buufer 

// console.log(buffer1.length);

//Copy buffer
// const buffersrc=new Buffer('ABC');
// const bufferDest=Buffer.alloc(3);
// buffersrc.copy(bufferDest);

// const Data=bufferDest.toString("utf-8");
// console.log(Data)


//slicing in buffer
// const bufferOld =new Buffer("Wellcome to cybrom");
// const newBuffer=bufferOld.slice(0,4);
// console.log(newBuffer.toString())

//concatinating buffer
// const bufferOne=new Buffer("Happy learning ");
// const bufferTwo=new Buffer("with cybrom");
// const bufferThree=Buffer.concat([bufferOne,bufferTwo]);
// console.log(bufferThree.toString());


