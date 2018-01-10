var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'antoniomachado1507@gmail.com',
    pass: 'atnightwhenthestarslighupmyroom'
  }
});

var mailOptions = {
  from: 'antoniomachado1507@gmail.com',
  to: 'andriu.montalvoc@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!RATA'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});