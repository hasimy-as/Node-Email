import express from 'express';
import mailer from 'nodemailer';
const mail = express.Router();

mail.get('/', (req, res) => res.end('this come from mail'));

async function main() {
  let akuntansi = await mailer.createTestAccount();
}

export default mail;
