const Product = require("../models/product");
const Card = require("../models/card");

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
  console.log("in post controller");
  console.log(req.body);
  
  //const product = new Product(req.body);
  var product = new Product ({
    product: req.body.name,
    description: req.body.description,
    price: req.body.price,
    VAT: req.body.vat,
    shipping: req.body.shipping,
    brand: req.body.brand

  });
  product.save()
      .then((result) => {
        res.redirect('/api/v1/products');
      })
      .catch((error) =>{
         console.log(error);
      }); 

}

const view_A_Product = (req,res) => {
  const id = req.params.id;
  Product.findById(id)
    .then(result => {
      res.render('details',{blog: result, title: 'Produt Details'});
    })
    .catch(err => {
      console.log(err);
    })

}

const delete_A_Product = (req,res) => {
  const id = req.params.id;
  Product.findByIdAndDelete(id)
    .then(result => {
      res.json({ redirect: '/api/v1/products'});
    })
    .catch(err => {
      console.log(err);
    })

}

const add_To_Card = (req,res) => {
  const id = req.params.id;
  Product.findById(id)
    .then(result => {
      res.render('addToCard',{blog: result, title: 'Add to my Card'});
    })
    .catch(err => {
      console.log(err);
    })

}

const post_myCard = (req,res) => {
  console.log(req.body.id);
  console.log(req.body.quantity);
  var card = new Card ({
    quantity: req.body.quantity,
    product: req.body.id,

  });
  card.save()
      .then((result) => {
        res.redirect('/api/v1/products');
      })
      .catch((error) =>{
         console.log(error);
      }); 
  //res.redirect('/api/v1/products/myCard');

}

// const my_Card = (req,res) => {
//   console.log('in my card controller');
//   res.locals.message = req.flash("info");
//   res.render("viewCard",{title: 'My Card'});
// }





module.exports = { get_All_Products, 
                   get_Form_Add_Product,
                   post_Product,
                   view_A_Product,
                   delete_A_Product,
                   add_To_Card,
                   post_myCard
                   };
