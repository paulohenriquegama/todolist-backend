if(process.env.NODE_ENV !== 'production'){
  require('dotenv').config();
}

const express = require('express');
const Conn = require('./models/conn/conn');


const app = express();

app.use(express.json());

const routes = require('./routes/routes');

app.use('/',routes);

const port = 3001;

const db_url = process.env.DB_URL;
const db_user = process.env.DB_USER;
const db_pass = process.env.DB_PASS;
const db_data = process.env.DB_DATA;

Conn(db_url,db_user,db_pass,db_data);

app.listen(port, () => {
  console.info(`App rodando em: localhost:${port}`);
})