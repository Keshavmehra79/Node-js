// import express from "express";
// import web from "./routes/web.js"
// import session from "express-session";
// import cors from "cors"
// import cookieParser from "cookie-parser";
// const app=express();

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(cors({
//     origin: "http://localhost:5173", // your React app URL
//     credentials:true
// }));

// app.use(cookieParser());

// app.use(session(
//     {
//         key:"keshav",
//         secret:"keshav123",
//         resave:false,
//         saveUninitialized:false,
//         cookie:{
//             maxAge:1000*60*60 //1 hour
//         }


//     }
// ))




// app.use("/session",web)

// app.listen(8000,()=>{
//     console.log("Server run on 80000 port")
// })

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

const fs=require("fs");
// const readableStream = fs.createReadStream("raj.txt", "utf-8");
// const writableStream=fs.createWriteStream('output.txt');
// readableStream.pipe(writableStream);

// readableStream.on("error",()=>{
//     console.log('Error to reading file'+err);
    
// })

// writableStream.on("error",()=>{
//     console.log('Error to writing file'+err);
    
// })

// writableStream.on("finish",()=>{
//     console.log('File copy completed!');
    
// })

// const writableStream=fs.createWriteStream('output.txt');
// writableStream.write('hello,')
// writableStream.write('world,')
// writableStream.write('\n writing to a stream is easy');
// //end the stream
// writableStream.end();
// //events for writablestream
// writableStream.on('finish',()=>{
//     console.log("All data has been writen to the file.");

// })

// writableStream.on('error',(err)=>{
//     console.log("Error writing to stream:",err);
// })
//create a readblestream for a file
const readableStream=fs.createReadStream('raj.txt',{
    encoding:'utf-8',
    highWaterMark:64*1024 //64kb chunks
});


//Event for readble stream
readableStream.on('data',(chunk)=>{
    console.log(`Received ${chunk.length} bytes of data.`);
    console.log(chunk);  
})

readableStream.on('end',()=>{
    console.log('No more data to read.')
})

readableStream.on('error',(err)=>{
    console.error("Error reading from stream:",err);
})