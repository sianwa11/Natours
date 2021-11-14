const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema(
  {
    review: {
      type: String,
      required: [true, 'Review must not be empty']
    },
    rating: { type: Number, min: 1, max: 5 },
    createdAt: {
      type: Date,
      default: Date.now()
    },
    /**
     * Many reviews belong to 1 tour
     * This is parent referencing
     */
    tour: {
      type: mongoose.Schema.ObjectId,
      ref: 'Tour',
      required: [true, 'Review must belong to a tour']
    },
    /**
     * Many reviews belong to 1 user
     * This is parent referencing
     */
    user: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: [true, 'Review must belong to a user']
    }
  },
  /**
   * Virtual properties show up as JSON
   */
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);

/**
 * MIDDLEWARE
 */

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
