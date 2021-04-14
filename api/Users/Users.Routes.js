const express = require('express');
const { getAllUsers, updateRoleOrBan, singleUser } = require('./Users.Controller');

const router = express.Router();

router.get('/', getAllUsers);
router.get('/singleUser/:userID', singleUser);
router.post('/updateRoleOrBan/:userID', updateRoleOrBan);

module.exports = router;
