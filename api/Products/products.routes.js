const express = require('express');
const {
  saveProduct,
  productType,
  productDelete,
  getAllProducts,
  updateStock,
} = require('./Products.Controller');

const router = express.Router();

router.get('/', getAllProducts);
router.post('/saveProduct', saveProduct);
router.get('/productType/:type', productType);
router.get('/productDelete/:productId', productDelete);
router.get('/updateProductStock/:productId', updateStock);

module.exports = router;
