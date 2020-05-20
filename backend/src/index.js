const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors()); //Método que permite qual frontend pode acessar a API;
app.use(express.json()); //vir sempre antes de todas as rotas;
app.use(routes); //para acessar as rotas de dentro de routes;

app.listen(3333);