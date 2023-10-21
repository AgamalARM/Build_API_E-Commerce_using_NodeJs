const mongoose = require('mongoose');
const Schema = mongoose.Schema ;

const cardSchema = new Schema({
    quantity: {
        type: Number,
        required: true
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    }

},{timestamps: true});

const Card = mongoose.model('Card', cardSchema);
module.exports = Card ;