const express = require('express');

const router = express.Router();
const Auth = require('../middlewares/AuthMiddleware');
const usersRoutes = require('./Users/Users.Routes');
const authRoutes = require('./Auth/auth.routes');
const publicRoutes = require('./Public/public.routes');
const productRoutes = require('./Products/products.routes');
const orderRoutes = require('./Orders/orders.routes');
const reviewsRoutes = require('./Reviews/reviews.routes');

router.use('/auth', authRoutes);
router.use('/public', publicRoutes);
router.use('/users', Auth, usersRoutes);
router.use('/products', Auth, productRoutes);
router.use('/orders', Auth, orderRoutes);
router.use('/reviews', Auth, reviewsRoutes);

module.exports = router;
