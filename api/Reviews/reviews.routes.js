const express = require('express');
const { saveReview, getAllReviews } = require('./Reviews.Controller');

const router = express.Router();

router.get('/', getAllReviews);
router.post('/saveReview', saveReview);
module.exports = router;
