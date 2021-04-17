const Reviews = require('../../model/Review.model');
const { reviewValidationSchema } = require('../../yupValidation/yupReviewValidation');

// eslint-disable-next-line consistent-return
module.exports.saveReview = async (req, res, next) => {
  const review = req.body;
  try {
    const validateReview = await reviewValidationSchema.isValid(review, {
      abortEarly: false,
    });
    if (!validateReview) {
      return res.status(200).json({ message: 'Validation error' });
    }
    const saveReview = await Reviews.create(review);
    res.status(200).json(saveReview);
  } catch (err) {
    next(err);
  }
};

// eslint-disable-next-line consistent-return
module.exports.getAllReviews = async (req, res, next) => {
  try {
    const reviews = await Reviews.find({}).sort({ createdAt: -1 });
    if (!reviews) {
      return res.status(404).json({ message: 'No Reviews Available' });
    }
    res.status(200).json(reviews);
  } catch (err) {
    next(err);
  }
};
