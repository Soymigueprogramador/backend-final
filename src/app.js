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
import specs from './swagger.js';

const app = express();
const port = config.PORT; 
const nombreDeLaEmpresa = 'Backend-final';

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
app.use(express.urlencoded({ extended: true }));
app.use(express.urlencoded({extended: true }));
app.use(express.json());
app.use(express.static(__dirname + '/public'));
app.use('/profile', routerProduct);

app.get('/index', (req, res) => {
    res.sendFIle(--__dirname + '/index.html');
});

app.post('/registro', async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).send('Todos los campos son requeridos');
  }
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(400).send('El correo electrónico ya está en uso');
  }
  const newUser = new User({ email, password });
  await newUser.save();
  res.send('¡Registro exitoso!');
});

app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel({ email });
    if (!user) {
      return res.status(400).send('El correo electrónico o la contraseña son incorrectos');
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(400).send('El correo electrónico o la contraseña son incorrectos');
    }
    res.redirect('/cargarProductos.html');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error de servidor');
  }
});

app.listen(port, (req, res) => {
    console.log(`${nombreDeLaEmpresa} escuchando en el puerto ${port}`);
});

export default app.js;