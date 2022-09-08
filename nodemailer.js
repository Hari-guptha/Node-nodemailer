var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'Mail Id',
    pass: ' App password '
  }
});

var mailOptions = {
  from: 'From mail id',
  to: ' TO mail id',
  subject: 'Happy coding',
  text: `hi i am titan_117`
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
