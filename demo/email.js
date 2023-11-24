var nodeMailer = require('nodemailer');

var transport = nodeMailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    requireTLS: true,
    auth:
    {
        user:'d37305901@gmail.com',
        pass:'txluqjciinmbpyly'
    }
});

var mailOptions={
    from:'d37305901@gmail.com',
    to:['sangeetakalra69@gmail.com','deepanshikalra55@gmail.com','babaprinter01@gmail.com'],
    subject:'nodemail',
    text:"Hii all! how are you?"
}
transport.sendMail(mailOptions,function(error,info){
    if(error){
        console.warn(error);
    }
    else{
        console.warn('email has been sent',info.response); 
    }
})







