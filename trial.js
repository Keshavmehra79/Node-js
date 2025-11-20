/////////////file system

                    //appendFile
// const fs=require("fs");
// fs.appendFile("mehra.txt","Hello i am your friend",(err)=>{
//     if(err) throw err;
//     console.log("file created");
// })
                                //open
// const fs=require("fs");
// const { throwDeprecation } = require("process");
// fs.open("keshav2.txt","w",(err)=>{
//     if(err) throw err;
//     console.log("file created !!!!!!!!11")
// })

                            //writefile
// const fs=require("fs");
// fs.writeFile("keshav2.txt","this is working!!!!",(err)=>{
//     if(err) throw err;
//     console.log("working........")
// })

                        //UNLINK
// const fs=require("fs");
// fs.unlink("mehra.txt",(err)=>{
//     if(err) throw err;
//     console.log("file deleted........")
// })

                //RENAME
const fs=require("fs");
fs.rename("keshav2.txt","sachin.txt",(err)=>{
    if(err) throw err;
    console.log("file name updated........")
})