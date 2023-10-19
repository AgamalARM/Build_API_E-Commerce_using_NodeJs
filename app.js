const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose'); // for mongodb
// http requests logger middleware morgan
const morgan = require('morgan');

const productRouter = require('./routes/productsRouter');
const myCardRouter = require('./routes/myCardRouter');

require('dotenv/config'); // to read Public Enviroment Variables at all project ".env"
const api = process.env.API_URL ;

//enable cors
app.use(cors());
app.options('*',cors());

// register view engine
app.set('view engine', 'ejs');

// middleware & static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(express.json());

// app.use(bodyParser.json()); //for handlling json
app.use(morgan('tiny'));   // http requests logger middleware morgan

//////
app.post('/api/v1/myCard', (req,res) => {
  console.log(req.body);
});
/////
///////Routes
app.use(api+'/products', productRouter);
app.use(api+'/myCard', myCardRouter);


// 404 page
app.use((req, res) => {
    res.status(404).render('404', { title: '404' });
  });


// connection to mongodb before start the server
mongoose.connect(process.env.CONNECTION_STRING ,{ useNewUrlParser: true, useUnifiedTopology: true })
.then((result) => app.listen(3000, () => {
    console.log('DataBase is connected');
    console.log('Server is running on port 3000');
}))
.catch((err) => {
    console.log(err);
})

