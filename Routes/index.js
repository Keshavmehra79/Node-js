const express=require("express");
const app=express();
const TeacherRoute=require("./routes/teacherRoute");

app.use("/teachers",TeacherRoute)

app.listen(9000,()=>{
    console.log("server run on 9000")
});
