// const http= require("http");
// http.createServer((req,res)=>{
//     res.write("<h1> Welcome to first node js program</h1>");
//     res.end();
// }).listen(8000);


// const http= require("http");
// http.createServer((req,res)=>{
//     res.write("<h1> Welcome to first node js program</h1>");
//     res.end("<h3>Server end .......");
// }).listen(9000);

// const http= require("http");
// http.createServer((req,res)=>{
//     res.write("<h1> Welcome to sec node js program</h1>");
//     res.end("<h2>Server end....");
// }).listen(8080,()=>{
//     console.log("Server runnig on 8080")
// });


// const http=require("http")
// const myStu=require("./cybrom");
// http.createServer((req,res)=>{
//     res.write("<h1>Welcome to mycollege");
//     res.write(myStu.Mycolleg());
//     res.write(myStu.Myfees());
// }).listen(9000);



////fs module
// const http=require("http")
// const fs=require("fs")
// http.createServer((req,res)=>{
//     fs.readFile("keshav.txt",(err,data)=>{
//         if(err) throw err;
//         res.write(data);
//         res.end("<h1>This server end.....</h1>")
//     })
// }).listen(9000)

// const http1=require("http");
// const fs2=require("fs");
// http1.createServer((req,res)=>{
//     res.write("<h1>My Data</h1>");
//     fs2.readFile("vector.pdf",(err,data)=>{
//         if(err) throw err ;
//         res.write(data);
//         res.end("<h3>Server ended</h3>")
//     })
// }).listen(1000)

/////////////////nodemon filename
// const http=require("http")
// const fs=require("fs")
// http.createServer((req,res)=>{
//     fs.readFile("VECTOR.pdf",(err,data)=>{
//         if(err) throw err;
//         res.write(data);
//         res.end("<h1>This server end.....</h1>")
//     })
// }).listen(9000)

// const fs=require("fs");
// fs.appendFile("raj.txt","hello, i am keshav",(err)=>{
//     if(err) throw err;
//     console.log("File created!");
// })


// const fs=require("fs");
// fs.open("raj.txt","w",(err,file)=>{
//     if(err) throw err;
//     console.log("File created succefully");
// })
const fs=require("fs");
// fs.writeFile("raj.txt","hello content second!",(err,file)=>{
//     if(err) throw err;
//     console.log("File created succefully");
// })

// fs.unlink("keshav.txt",(err)=>{
//     if(err) throw err;
//     console.log("file deleted!")
// })

fs.rename("keshav.txt","ranu.txt",(err)=>{
    if(err) throw err;
    console.log("file renamed")
})
