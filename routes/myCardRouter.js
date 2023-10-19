const express = require('express');
const router = express.Router();
const myCardController = require('../controllers/myCardController');

router.post('/', myCardController.post_My_Card);



module.exports = router;