const mongoose = require('mongoose');
const Schema = mongoose.Schema ;

const productSchema = new Schema({
    product: {
        type: String,
        require: true
    },
    description: {
        type: String,
        
    },
    image: {
        type: String 
    },
    price: {
        type: Number,
        require: true
    },
    VAT: {
        type: Boolean,
        require: true
    },
    shipping: {
        type: Number,
        require: true
    },
    Brand: {
        type: String,
        require: true
    },
    addToCard: {
        type: Boolean,

    }

}, {timestamps: true});

const Product = mongoose.model('Product', productSchema);
module.exports = Product ;