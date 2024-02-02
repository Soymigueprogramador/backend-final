import routerProduct from './router/products.router.js'; {}
import express from 'express';
import __dirname from './utils.js';
import { conectameMongodb } from './config/config.db.js';
import dotenv from 'dotenv';
import { config } from './config/config.js';
import { userModel } from './models/user.model.js';
import { productModel } from './models/product.model.js';
import winston from 'winston';
import Sessions from 'sessions';
import path from 'path';
import { ObjectId } from 'mongoose';
import { Server } from 'socket.io';
import productRouter from './router/products.router.js'; 
import { MongoClient, ServerApiVersion } from 'mongodb';
import mongoose from 'mongoose';
import ConnectMongo from 'connect-mongo';
import inicializandoPassport from './middlewares/passport-config.js';
import { Passport } from 'passport';
import sessionsRouter from './router/sessions.router.js';
import passportConfig from './middlewares/passport-config.js';
import ApiLoggerRouter from './router/logger.router.js';
import { setLoggerLevel } from './errorManagerment/logger.js';
import { errorHandler } from './errorManagerment/errorHandler.js';
import swaggerUiExpress from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';
import passportLocal from 'passport-local';
import passportGithub2 from 'passport-github2';
import cargarProductos from './router/cargarProductos.router.js'
import apiProductsRouter from './router/products.router.js'; 
//import specs from './swagger.js';

const app = express();

const port = config.PORT; 
const nombreDeLaEmpresa = 'Backend-final';
const authenticateUser = (req, res, next) => {

  if (!req.user) {
    return res.status(401).json({ message: 'Usuario no autenticado' });
  }
  if (req.user.role !== 'admin') {
    return res.status(403).json({ message: 'Permiso denegado' });
  }
  next();
};

app.use(express.urlencoded({extended: true }));
app.use(express.json());
app.use(express.static(__dirname + '/public'));
app.use('/productos', express.static('/productos'));
app.use('/profile', cargarProductos);

app.get('/admin/dashboard', authenticateUser, (req, res) => {
  res.json({ message: 'Panel de administrador' });
});
app.get('/profile', (req, res) => {
  res.json({ message: 'Perfil de usuario' });
});

app.get('/index', (req, res) => {
    res.sendFIle(--__dirname + '/index.html');
});

app.post('/registro', async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password === 'user' ) {
    return res.status(201).send('Bienevenido usuario');
    return res.redirect('/mostrarProductos.html');
  }
  const existingUser = await User.findOne({ email });
  if (existingUser === 'user') {
    return res.status(400).send('Usuario ya registrado');
    return res.redirect('/registro.html'); 
    alert('Usuario ya registrado'); 
  }
  const newUser = new User({ email, password });
  await newUser.save();
  res.send('¡Usuario registrado exitoso!');
});

app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const emailAdmin = 'coder2023@gmail.com';
  const passwordAdmin = 123456789;
  const emailUser = 'soymigueprogramador@gmail.com'; 
  const passwordUser = 1526644514; 
  if (email === 'coder2023@gmail.com' && password === 123456789) {
    return res.status(201).send('Vista para el administrador');
    return res.redirect('/cargarProductos.html');
    return
  } else if (email === 'soymigueprogramador@gmail.com' && password === 1526644514) {
    return res.status(201).send('Bienvenido usuario');
    return res.redirect('/mostrarProductos.html');
    return
  } else {
    return res.status(401).send('Te tenes que logear con un email y password');
  }
});

app.listen(port, (req, res) => {
    console.log(`${nombreDeLaEmpresa} escuchando en el puerto ${port}`);
});

export default app.js; 