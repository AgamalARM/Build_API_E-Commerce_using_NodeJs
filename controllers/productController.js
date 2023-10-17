const Product = require("../models/product");

const get_All_Products =  (req, res) => {
    Product.find().sort({ createdAt: -1 })
    .then(result => {
      res.render('index', { blogs: result, title: 'All Products' });
    // res.send(result);
    })
    .catch(err => {
      console.log(err);
    });
};

module.exports = {get_All_Products}