const express = require('express');

const router = express.Router();
const usersRoutes = require('./Users/Users.Routes');
const authRoutes = require('./Auth/auth.routes');
const Auth = require('../middlewares/AuthMiddleware');

router.use('/auth', authRoutes);
router.use('/users', Auth, usersRoutes);
// router.use('/products',);
// router.use('/orders',);
// router.use('/reviews',);

module.exports = router;
