const Tour = require('../models/tourModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

exports.getOverview = catchAsync(async (req, res, next) => {
  // 1) Get all the tour data from collection
  const tours = await Tour.find();

  // 2) Build template

  // 3) Render that template using the tour data from step 1
  res.status(200).render('overview', {
    title: 'All tours',
    tours
  });
});

exports.getTour = catchAsync(async (req, res, next) => {
  // 1) Get the data for the requested tour (include reviews and tour guide)
  const tour = await Tour.findOne({ slug: req.params.slug }).populate({
    path: 'reviews',
    fields: 'review rating user'
  });

  if (!tour) return next(new AppError('There is no tour with that name', 404));

  // 2) Build the template

  // 3) Render template using data from step 1
  res.status(200).render('tour', {
    title: tour.name,
    tour
  });
});

exports.login = catchAsync(async (req, res, next) => {
  // Build the template
  // Render the template
  res.status(200).render('login', {
    title: 'Log into your account'
  });
});

exports.getAccount = (req, res) => {
  res.status(200).render('account', {
    title: 'Your account'
  });
};
