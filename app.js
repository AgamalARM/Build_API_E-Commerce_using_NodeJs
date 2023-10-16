const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose'); // for mongodb
// http requests logger middleware morgan
const morgan = require('morgan');
const Product = require('./models/product');

//middleware 
app.use(bodyParser.json()); //for handlling json
app.use(morgan('tiny'));   // http requests logger middleware morgan


require('dotenv/config'); // to read Public Enviroment Variables at all project ".env"
const api = process.env.API_URL ;

// app.get(api+'/products', (req,res) => {
//     const products = {
//         id: 1,
//         name: 'iphon',
//         image: 'image_url',
//         price: 13000
//     };
//     res.send(products);
// })
app.get(api+'/products', async(req,res) => {  // async+await = .then, .catch
    const productList = await Product.find();
    res.send(productList);
})

app.post(api+'/products', (req,res) => {
    const newProduct = req.body;
    res.send(newProduct);
    console.log(newProduct);
})
//// test database
app.get(api+'/add-product', (req,res) => {
    const product = new Product({
      product: 'T-Shirt',
      description: '100 % COTTON',
      image: 'image_url',
      price: 2000,
      VAT: true,
      shipping: 300,
      total: 2300,
      merchant: 'TimberLand',
      addToCard: true
  
    });
    product.save()
     .then((result) => {
      res.send(result);
     })
     .catch((error) =>{
      console.log(error);
     });
  
        
  });



// connection to mongodb before start the server
mongoose.connect(process.env.CONNECTION_STRING ,{ useNewUrlParser: true, useUnifiedTopology: true })
.then((result) => app.listen(3000, () => {
    console.log('DataBase is connrcted');
    console.log('Server is running on port 3000');
}))
.catch((err) => {
    console.log(err);
})
