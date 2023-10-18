const Product = require("../models/product");

const get_All_Products = (req, res) => {
  Product.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      res.render("index", { blogs: result, title: "All Products" });
    })
    .catch((err) => {
      console.log(err);
    });
};

const get_Form_Add_Product = (req, res) => {
  res.render('create', {title: "Add Product"});
};

const post_Product = (req, res) => {
  console.log(req.body);
  
  // const product = new Product(req.body);
  // // let product = new Product ({
  // //   product: req.body.name,
  // //   description: req.body.description,
  // //   price: req.body.price,
  // //   VAT: req.body.vat,
  // //   shipping: req.body.shipping,
  // //   brand: req.body.brand

  // // });
  // product.save()
  //     .then((result) => {
  //       res.redirect('/');
  //     })
  //     .catch((error) =>{
  //        console.log(error);
  //     });
    


  

}

module.exports = { get_All_Products, 
                   get_Form_Add_Product,
                   post_Product
                   };
