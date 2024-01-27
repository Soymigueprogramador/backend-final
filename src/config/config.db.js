import mongoose from 'mongoose';
import { config } from './config.js';
import dotenv from 'dotenv';
import { loggers } from 'winston';

dotenv.config({ path: './.env' }); 

const username = 'soymigueprogramador';
const password = 'loquiero3d';
const dbName = 'MG-lo-quiero-3d-database';

const miUrlMongodb = 'mongodb+srv://soymigueprogramador:loquiero3d@mg-lo-quiero-3d-databas.ph2h9f6.mongodb.net/${dbName}?retryWrites=true&w=majority';

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