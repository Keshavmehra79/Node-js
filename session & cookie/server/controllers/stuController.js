import cookieParser from "cookie-parser";

class stuController{
    static Login=async(req,res)=>{
        const { name, email, mobile }=req.body;
        req.session.name=name;
        req.session.email=email;
        req.session.mobile=mobile;
        res.send({msg:"Logged in",user:req.session.name})

    }

    static getUser=async(req,res)=>{
        if(req.session.name){
            res.send({user:req.session.name,email:req.session.email,mobile:req.session.mobile})
        } else{
            res.send({msg:"Not logged in"})
        }
    }

    static LoginCookie=async(req,res)=>{
        const {name,email}=req.body;
        res.cookie("name",name,{maxAge:60*1000});
        res.cookie("email",email,"165862",{maxAge:60*1000});
        res.send("Cookie set....")
    }

    static getCookie=async(req,res)=>{
        const {name,email}=req.cookies;
        res.send({name:name,email:email})
    }
}

export default stuController