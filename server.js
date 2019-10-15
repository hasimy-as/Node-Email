import express from 'express';
import bodyParser from 'body-parser';
import mailer from 'nodemailer';

const server = express();
const serverType = 'localhost';
const PORT = 8080 || process.env.port;

server.set('view engine', 'ejs');
server.use(express.static('public'));
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

server.get('/', (req, res) => res.render('index'));
server.post('/sendEmail', (req, res) => {
  let transporter = mailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 465,
    auth: {
      user: 'your@email.com',
      pass: 'yourpassword'
    }
  });
  let mailOptions = {
    from: '"your@email.com"', // sender address
    to: req.body.to, // list of receivers
    subject: req.body.subject, // subject line
    text: req.body.body // plain text body
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) throw err;
    res.render('sent');
  });
});

server.listen(PORT, () => console.log(`Connected to ${serverType}:${PORT}`));
