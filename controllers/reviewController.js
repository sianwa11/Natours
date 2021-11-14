const Review = require('./../models/reviewModel');
const catchAsync = require('./../utils/catchAsync');

/**
 * Creates a new review and returns the newly created review
 */
exports.createReview = catchAsync(async (req, res, next) => {
  const newReview = await Review.create(req.body);

  res.status(201).json({
    status: 'success',
    data: { review: newReview }
  });
});

/**
 * Gets all reviews in the Database
 */
exports.getAllReviews = catchAsync(async (req, res, next) => {
  const reviews = await Review.find();

  res.status(200).json({
    status: 'success',
    results: reviews.length,
    data: { reviews }
  });
});
