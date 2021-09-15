if(process.env.NODE_ENV !== 'production'){
  require('dotenv').config();
}

const express = require('express');
const cors = require('cors');
const Conn = require('./models/conn/conn');

var whitelist = ['http://localhost:3000', 'https://mytodolist-backend.herokuapp.com/']
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
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