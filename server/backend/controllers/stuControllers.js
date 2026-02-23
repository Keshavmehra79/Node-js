const stuModel=require("../models/stuModel")


const savadata= async (req,res)=>{
  const {name,age,address,city}=req.body;
  console.log(req.body);
  const student= await stuModel.create({
    name:name,
    age:age,
    address:address,
    city:city
  })

  res.send({msg:"data succefully saved!!!!!!"});


}

const mydata=async (req,res)=>{
  const student=await stuModel.find();
  res.send(student)
}
module.exports={
    savadata,
    mydata
}