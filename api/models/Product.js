const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    brand: { type: String, required: true },
    category: { type: String, required: true },
    rating: { type: Number, reuquired: true, min: 0, max: 5 },
    stock: { type: Number, reuquired: true, min: 0 },
    price: { type: Number, reuquired: true, min: 0 },
    discountPercentage: { type: Number, reuquired: true, min: 0, max: 100 },
    thumbnail: { type: String },
    images: [String],
});

const ProductModel = mongoose.model('Product', {productSchema});

module.exports = ProductModel;