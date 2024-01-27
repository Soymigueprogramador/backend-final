import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';
import { config } from '../config/config.js';

const productCollection = config.PRODUCT_COLLECTION

const productSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    stock: { type: Number, required: true },
    category: { type: String, required: true },
    thumbnail: [],
    status: { type: Boolean, required: true },
}); 

productSchema.plugin(mongoosePaginate);

export const productModel = mongoose.model(productCollection, productSchema);
//console.log(productModel);

/*try {
    const productModel = mongoose.model(productCollection, productSchema);
    console.log('Modelo de producto creado con éxito:', productModel);
} catch (error) {
    console.error('Error al crear el modelo de producto:', error);
    process.exit(1);
}*/