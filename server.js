import express from 'express';
import mail from './mailer/mailer';

const server = express();
const serverName = 'localhost';
const PORT = 3000 || process.env.PORT;

server.use('/',  mail);
server.listen(PORT, () => console.log(`server di ${serverName}:${PORT}!`));
