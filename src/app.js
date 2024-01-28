import routerProduct from './router/products.router.js';
import express from 'express';
import __dirname from './utils.js';
import { conectameMongodb } from './config/config.db.js';
import dotenv from 'dotenv';
import { config } from './config/config.js';
import { userModel } from './models/user.model.js';
import { productModel } from './models/product.model.js';
import winston from 'winston';
//import sessions from 'sessions';
 
const app = express();
const port = 3000; 
const nombreDeLaEmpresa = 'Backend-final';
const userEmail = 'soymigueprogramador';

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
    const user = await User.findOne({ email });
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

console.log(userEmail);