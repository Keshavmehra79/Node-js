const nodemailer=require("nodemailer");

let mailTransporter =
    nodemailer.createTransport(
        {
            service: 'gmail',
            auth: {
                user: 'mehrasachin7909@gmail.com',
                pass: 'quzg diut nzvc jkvh'
            }
        }
    );

 const Sendemail=(req,res)=>{
        const {name, subject, email, mobile}=req.body;
        
let mailDetails = {
    from: 'mehrasachin7909@gmail.com',
    to: email,
    subject: 'Test mail',
    text: ` Name: ${name} \n
            Subject: ${subject} \n
            Email: ${email}\n
            moble: ${mobile}`
};

mailTransporter
    .sendMail(mailDetails,
        function (err, data) {
            if (err) {
                console.log('Error Occurs');
            } else {
                console.log('Email sent successfully');
            }
        });
        res.send("Okk")
        }

        module.exports={
            Sendemail
        }    
       
       
       
       
       
       
       
      