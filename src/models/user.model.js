import mongoose from "mongoose";
import { config } from '../config/config.js';
import bcrypt from 'bcrypt';

const encriptarPassword = 10;
const usersCollection = 'soymigueprogramador';

const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['user', 'admin'], default: 'user' }
});

userSchema.pre('save', function(next) {
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