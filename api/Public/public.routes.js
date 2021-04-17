const express = require('express');
const {
  productType,
  getAllReviews,
  getAllProducts,
  saveNewsLetter,
  saveContact,
  getAllContact,
  getAllNewsletter,
} = require('./Public.Controller');

const router = express.Router();

router.get('/productType/:type', productType);
router.get('/getAllProducts', getAllProducts);
router.get('/getAllReviews', getAllReviews);
router.get('/NewsLetter/:userEmail', saveNewsLetter);
router.get('/getNewsLetter/', getAllNewsletter);
router.post('/contact', saveContact);
router.get('/getContact', getAllContact);

module.exports = router;
