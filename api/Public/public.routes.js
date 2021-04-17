const express = require('express');
const { productType, getAllReviews, getAllProducts } = require('./Public.Controller');

const router = express.Router();

router.get('/productType/:type', productType);
router.get('/getAllProducts', getAllProducts);
router.get('/getAllReviews', getAllReviews);

module.exports = router;
