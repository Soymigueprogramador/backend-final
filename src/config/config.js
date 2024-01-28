import dotenv from 'dotenv';
import { Command, Option } from 'commander';
const programa = new Command(); 

dotenv.config({ path: './src/.env', override: true });

export const config = {
    MONGO_URL: process.env.MONGO_URL,
    USERS_COLLECTION: process.env.USERS_COLLECTION,
    PRODUCT_COLLECTION: process.env.PRODUCT_COLLECTION,
    PASSWORD_ADMINISTRADOR: process.env.PASSWORD_ADMINISTRADOR, 
    PORT: process.env.PORT 
};

export default config;