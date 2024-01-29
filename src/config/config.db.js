import mongoose from 'mongoose';
import { config } from './config.js';
import dotenv from 'dotenv';
import { loggers } from 'winston';

dotenv.config({ path: './.env' }); 

const username = config.USER_NAME
const password = config.PASSWORD
const dbName = config.DB_NAME

const miUrlMongodb = config.MONGO_URL

export async function conectameMongodb() {
    try {
        await mongoose.connect(miUrlMongodb, {
        });
        console.log('Conectado a MongoDB');
    } catch (error) {
        console.error('UH capo algo salió mal y no te conectaste a la base de datos', error);
    }
}
conectameMongodb();