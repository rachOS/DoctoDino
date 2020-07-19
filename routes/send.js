const express = require('express');
const router = express.Router();
const mailer = require('nodemailer');
const dotenv = require('dotenv').config();

let transporter = mailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.NODE_ENV_MAIL_USER, // generated ethereal user
    pass: process.env.NODE_ENV_MAIL_PASS, // generated ethereal password
  },
});

transporter.verify((err, success) => {
  if(err){
    console.log(err);
  }
  else{
    console.log('Server is ready to take messages');
  }
});

router.post('/', (req, res, next) => {
  const { name, video, text } = req.body[0];

  let content = `Titre de l'article: ${name}
  \n Contenu: ${text}
  \n Lien de la vidéo: ${video}`;

  let mail = {
    from: 'dinhospital@gmail.com',
    to: process.env.NODE_ENV_MAIL_USER,
    subject: "Dinhospital: les info",
    text: content
  };

  transporter.sendMail(mail, (err, _) => {
    if(err){
      res.status(404).json({
        status: 'fail'
      });
    }
    else{
      res.status(200).json({
        status: 'success'
      });
    }
  });
});

module.exports = router;