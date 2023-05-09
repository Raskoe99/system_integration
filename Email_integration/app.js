import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

let transporter = nodemailer.createTransport(
    {
        service: process.env.MAIL_SERVICE,
        auth:{
            user: process.env.USER_MAIL,
            pass: process.env.USER_PASS
        }
    }
);

let mailOptions = {
    from: `"Rasmus" <${process.env.PERSONAL_MAIL}>`, // my school email sending to itself
    to: process.env.PERSONAL_MAIL, 
    subject: 'Welcome!',
    text: 'Hello, this is a test mail!',
};

// trigger the sending of the E-mail
transporter.sendMail(mailOptions, function(error, info){
    if(error){
        return console.log(error);
    }
    console.log('Message sent: ' + info.response);
});