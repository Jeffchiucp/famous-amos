const nodemailer = require('nodemailer')
const mailgunTransport = require('nodemailer-mailgun-transport')

//http://jeffmcmahan.info/blog/how-to-use-nodemailer-with-mailgun/
// stackoverflow link:
//https://stackoverflow.com/questions/26956251/sending-emails-using-mailgun-with-nodemailer-package
const mailgunOptions = {
  auth: {
    api_key: process.env.MAILGUN_ACTIVE_API_KEY,
    domain: process.env.MAILGUN_DOMAIN,
  }
};

const transport = mailgunTransport(mailgunOptions);


var nodemailerMailgun = nodemailer.createTransport(mailgunTransport(auth));

nodemailerMailgun.sendMail({
  from: 'jeffchiucp@gmail.com',
  subject: 'welcome to pet store',
  text: 'We love Rex!',
}, function (err, info) {
  if (err) {
    console.log('Error: ' + err);
  }
  else {
    console.log('Response: ' + info);
  }
});

module.exports = new nodemailerMailgun.sendMail();
