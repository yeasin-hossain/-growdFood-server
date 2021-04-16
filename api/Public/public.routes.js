const express = require('express');
const { productType, getAllReviews } = require('./Public.Controller');

const router = express.Router();

router.get('/productType/:type', productType);
router.get('/getAllReviews', getAllReviews);

module.exports = router;
