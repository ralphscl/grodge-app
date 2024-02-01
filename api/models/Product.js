const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    price: { type: Number, reuquired: true, min: 0 },
    discountPercentage: { type: Number, reuquired: true, min: 0, max: 100 },
    rating: { type: Number, reuquired: true, min: 0, max: 5 },
    stock: { type: Number, reuquired: true, min: 0 },
    brand: { type: String, required: true },
    category: { type: String, required: true },
    thumbnail: { type: String },
    images: [String],
});

// image by url or upload
// has multiple variation

const ProductModel = mongoose.model('Product', {productSchema});

module.exports = ProductModel;