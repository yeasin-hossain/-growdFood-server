const express = require('express');
const {
  productType,
  getAllReviews,
  getAllProducts,
  saveNewsLetter,
} = require('./Public.Controller');

const router = express.Router();

router.get('/productType/:type', productType);
router.get('/getAllProducts', getAllProducts);
router.get('/getAllReviews', getAllReviews);
router.get('/NewsLetter/:userEmail', saveNewsLetter);

module.exports = router;
