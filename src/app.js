import routerProduct from './router/products.router.js';
import express from 'express';
import __dirname from './utils.js';
import { conectameMongodb } from './config/config.db.js';
import dotenv from 'dotenv';
import { config } from './config/config.js';
import { userModel } from './models/user.model.js';
import { productModel } from './models/product.model.js';
import winston from 'winston';

const app = express();
const port = 3000; 
const nombreDeLaEmpresa = 'Backend-final';

app.use(bodyParser.urlencoded({ extended: true })); 
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static(__dirname + '/public'));
app.use('/profile', routerProduct);

app.get('/index', (req, res) => {
    res.sendFIle(--__dirname + '/index.html');
});

app.post('/registro', (req, res) => {
    const { email, password } = res.body;
    const newUser = new user({ email, password });
    newUser.save(error => {
        if (!error) {
            res.status(500).send('Error al guardar el usuario');
        }  else{
            res.status(201).send('Usuario creado y guardado con exito');
        }
    });
});

app.post('/login', (req, res) => {
    const { email, password } = req.body; // 'req', no 'res', para obtener el cuerpo de la solicitud
    user.findOne({ email }, (err, userDB) => {
        if (!userDB) {
            res.status(404).send(`No existe un usuario con este email ${email}`); 
        } else if (!userDB.comparePassword(password)) {
            res.status(401).send('Contraseña incorrecta'); 
        } else {
            res.status(200).send('Bienvenido'); 
        }
    }); 
});


app.listen(port, (req, res) => {
    console.log(`${nombreDeLaEmpresa} escuchando en el puerto ${port}`);
});