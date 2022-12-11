const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  tittle: {
    type: String
  },
  price: {
    type: Number
  },
  description: {
    type: String
  },
  createdAt:{
    type: Date, default: Date.now
  },
  updatedAt:{
    type: Date, default: Date.now
  }
 }, { timestamps: true }
);

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;