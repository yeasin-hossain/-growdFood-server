const express = require('express');

const router = express.Router();
const usersRoutes = require('./Users/Users.Routes')
router.use('/users',usersRoutes);
// router.use('/products',);
// router.use('/orders',);
// router.use('/reviews',);

module.exports = router;
