if(process.env.NODE_ENV !== 'production'){
  require('dotenv').config();
}

const express = require('express');
const cors = require('cors');
const Conn = require('./models/conn/conn');

const corsOptions = {
  origin: 'https://mytodolist-frontend.herokuapp.com/',
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
}

const app = express();

app.use(express.json());
app.use(cors(corsOptions));

const routes = require('./routes/routes');

app.use('/',routes);

const port = 3001;

const db_url = process.env.DB_URL;
const db_user = process.env.DB_USER;
const db_pass = process.env.DB_PASS;
const db_data = process.env.DB_DATA;

Conn(db_url,db_user,db_pass,db_data);

app.listen(process.env.PORT || port, () => {
  console.info(`App rodando em: localhost:${port}`);
})