const express = require('express');

const router = express.Router();
const usersRoutes = require('./Users/Users.Routes');
const authRoutes = require('./Auth/auth.routes');

router.use('/auth', authRoutes);
router.use('/users', usersRoutes);
// router.use('/products',);
// router.use('/orders',);
// router.use('/reviews',);

module.exports = router;
