import mongoose from "mongoose";
import bcrypt from 'bcrypt';
//import { userModel } from './user.model.js';

// La cantidad de veces que se estará encriptando el password. 
const encriptarPassword = 10;
const usersCollection = 'users1';

// Esquema del usuario.
const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

// Función que se ejecuta antes de guardar el usuario en la base de datos.
userSchema.pre('save', function(next) {
    // Verificamos si los datos del password son correctos o si se está modificando
    if(this.isModified('password')) {
        const document = this;
        bcrypt.hash(document.password, encriptarPassword, (error, hashedPassword) => {
            if(error) {
                return next(error);
            } else {
                document.password = hashedPassword;
                next();
            }
        });
    } else {
        next();
    }
});

// Funcion para comparar si el password existe y es correcto o no lo es.
userSchema.methods.passwordCorrect = function(password, callback) {
    bcrypt.compare(password, this.password, function(error, same) {
        if(error) {
            return callback(error);
        } else {
            callback(error, same);
        }
    });
};

export const userModel = mongoose.model(usersCollection, userSchema);

// Usar el modelo de usuario
const usuario = new userModel({
  email: 'correo@ejemplo.com',
  password: 'contraseña',
});

usuario.save((err, resultado) => {
  if (err) {
    console.error(err);
  } else {
    console.log('Usuario guardado correctamente:', resultado);
  }
});