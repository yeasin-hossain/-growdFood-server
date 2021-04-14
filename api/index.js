const express = require('express');

const router = express.Router();
const usersRoutes = require('./Users/Users.Routes');
const authRoutes = require('./Auth/auth.routes');
const Auth = require('../middlewares/AuthMiddleware');
const productRoutes = require('./Products/products.routes');

router.use('/auth', authRoutes);
router.use('/users', Auth, usersRoutes);
router.use('/products', Auth, productRoutes);
// router.use('/orders',);
// router.use('/reviews',);

module.exports = router;
