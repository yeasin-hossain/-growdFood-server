const express = require('express');
const { getAllProducts } = require('./Users.Controller');

const router = express.Router();

router.get('/', getAllProducts);

module.exports = router;