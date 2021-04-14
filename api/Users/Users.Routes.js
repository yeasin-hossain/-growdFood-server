const express = require('express');
const { getAllUsers } = require('./Users.Controller');

const router = express.Router();

router.get('/', getAllUsers);

module.exports = router;
