const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/', productController.get_All_Products);
router.get('/add-product', productController.get_Form_Add_Product);
router.post('/', productController.post_Product);
router.get('/:id', productController.view_A_Product);
router.delete('/:id', productController.delete_A_Product);

// app.get(api+'/products', async(req,res) => {  // async+await = .then, .catch
//     const productList = await Product.find();
//     res.send(productList);
// })

// app.post(api+'/products', (req,res) => {
//     const newProduct = req.body;
//     res.send(newProduct);
//     console.log(newProduct);
// })
// //// test database
// app.get(api+'/add-product', (req,res) => {
//     const product = new Product({
//       product: 'T-Shirt',
//       description: '100 % COTTON',
//       image: 'image_url',
//       price: 2000,
//       VAT: true,
//       shipping: 300,
//       total: 2300,
//       merchant: 'TimberLand',
//       addToCard: true
  
//     });
//     product.save()
//      .then((result) => {
//       res.send(result);
//      })
//      .catch((error) =>{
//       console.log(error);
//      });
  
        
//   });


  module.exports = router;