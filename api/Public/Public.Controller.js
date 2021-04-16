const Products = require('../../model/Products.model');
const Reviews = require('../../model/Review.model');

// eslint-disable-next-line consistent-return
module.exports.productType = async (req, res, next) => {
  const { type } = req.params;
  try {
    const products = await Products.find({ type }).limit(5);
    if (products.length === 0) {
      // Send Final Data
      return res.status(200).json({ message: 'Sorry No Product Found' });
    }

    res.status(200).json(products);
  } catch (err) {
    next(err);
  }
};

// eslint-disable-next-line consistent-return
module.exports.getAllReviews = async (req, res, next) => {
  try {
    const reviews = await Reviews.find({});
    if (!reviews) {
      return res.status(404).json({ message: 'No Reviews Available' });
    }
    res.status(200).json(reviews);
  } catch (err) {
    next(err);
  }
};