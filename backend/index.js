const http=require("http");
const uc=require("uppercase");
http.createServer((req,res)=>{
        res.write(uc("hello i am keshav"));
        res.end();
}).listen(9000,()=>{
    console.log("Server run on 9000 prot......")
})


///////Append file
// const fs=require("fs");
// fs.appendFile("ranu.txt","I am keshav from bhopal",(err)=>{
//     if(err) throw err;
//     console.log("File Created");
    
// })
///////open
// const fs=require("fs");
// fs.open("raj.txt","w",(err,data)=>{
//     if(err) throw err;
//     console.log("File created!!!!!!!!!!!");    
// })


/////writefile
// const fs=require("fs");

// fs.writeFile("raju.txt","I am Naeem",(err)=>{
//     if(err) throw err;
//     console.log("File created...");
    
// })

////////////////delete(unlink)
// fs.unlink("raju.pdf",(err)=>{
//     if(err) throw err;
//     console.log("File created.....");
    
// })


/////////////rename
// fs.rename("riya.pdf","satya.js",(err)=>{
//     if(err) throw err;
//     console.log("File renamed!!!!!!!!!");
    
// })



