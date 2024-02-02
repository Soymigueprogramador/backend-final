import dotenv from 'dotenv';
import { Command, Option } from 'commander';
const programa = new Command(); 

dotenv.config({ path: './src/.env', override: true });

export const config = {
    MONGO_URL: process.env.MONGO_URL || 'mongodb+srv://soymigueprogramador:loquiero3d@mg-lo-quiero-3d-databas.ph2h9f6.mongodb.net/${dbName}?retryWrites=true&w=majority',
    USERS_COLLECTION: process.env.USERS_COLLECTION || 'user',
    PRODUCT_COLLECTION: process.env.PRODUCT_COLLECTION || 'product',
    PASSWORD_ADMINISTRADOR: process.env.PASSWORD_ADMINISTRADOR || 123456789, 
    PORT: process.env.PORT || 8080 
};

export default config;