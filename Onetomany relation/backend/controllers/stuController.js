const Authormodel=require("../models/authormodel");
const Bookmodel=require("../models/bookmodel")

const insert=async(req,res)=>{
    const { author,email,bookname,price}=req.body;
    const Author=await Authormodel.create({
            authorname:author,
    email:email,
    })
    const book=await Bookmodel.create({
         bookname:bookname,
          price:price     
    })

    await Authormodel.findByIdAndUpdate(Author._id,{$push:{books:book._id}})

    res.send("Data sent")
}

const Display=async(req,res)=>{
    const Author=await Authormodel.find().populate("books");
    res.send(Author);
}

const addbook=async(req,res)=>{
    const { bookname,price,Authorid}=req.body;
    const book=await Bookmodel.create({
        bookname:bookname,
        price:price
    })
    await Authormodel.findByIdAndUpdate(Authorid,{$push:{books:book._id}});
    res.send("Book Added")
}
module.exports={
    insert,
    Display,
    addbook
}