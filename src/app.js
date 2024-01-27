import routerProduct from './router/products.router.js';
import express from 'express';
import __dirname from './utils.js';
import { conectameMongodb } from './config/config.db.js';
import dotenv from 'dotenv';
import { config } from './config/config.js';

const app = express();
const port = 3000; 
const nombreDeLaEmpresa = 'Backend-final';

app.use(express.urlencoded({extended: true}));

app.use(express.json());

app.use(express.static(__dirname + '/public'));

app.use('/profile', routerProduct);

app.get('/index', (req, res) => {
    res.sendFIle(--__dirname + '/index.html');
});

app.listen(port, (req, res) => {
    console.log(`${nombreDeLaEmpresa} escuchando en el puerto ${port}`);
});