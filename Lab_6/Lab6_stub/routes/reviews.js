// Import the express router as shown in the lecture code
// Note: please do not forget to export the router!

import express from 'express';
import { reviewsData } from '../data/index.js';
import { validateReviewInput, validateId, validateUpdateReviewInput } from '../helpers.js'

const router = express.Router();

router
  .route('/:productId')
  .get(async (req, res) => {
    //code here for GET
    try {
      req.params.id = validateId(req.params.productId, 'Id URL Param');
    } catch (e) {
      return res.status(400).json({ error: e });
    }
    try {
      const productReviewList = await reviewsData.getAllReviews(req.params.id);
      return res.json(productReviewList);
    } catch (e) {
      return res.status(404).json({ error: e });
    }
  })
  .post(async (req, res) => {
    //code here for POST
    try {
      req.params.id = validateId(req.params.productId, 'Id URL Param');
    } catch (e) {
      return res.status(400).json({ error: e });
    }
    let reviewData = req.body;
    //make sure there is something present in the req.body
    if (!reviewData || Object.keys(reviewData).length === 0) {
      return res
        .status(400)
        .json({ error: 'There are no fields in the request body' });
    }
    //check all inputs, that should respond with a 400
    try {
      reviewData = validateReviewInput(req.params.id, reviewData.title, reviewData.reviewerName, reviewData.review, reviewData.rating);
    } catch (e) {
      return res.status(400).json({ error: e });
    }
    //create the review
    try {
      const newReview = await reviewsData.createReview(req.params.id, reviewData.title, reviewData.reviewerName, reviewData.review, reviewData.rating);
      return res.json(newReview);
    } catch (e) {
      return res.status(404).json({ error: e });
    }
  });

router
  .route('/review/:reviewId')
  .get(async (req, res) => {
    //code here for GET
    try {
      req.params.id = validateId(req.params.reviewId, 'Id URL Param');
    } catch (e) {
      return res.status(400).json({ error: e });
    }
    //try getting the product by ID
    try {
      const review = await reviewsData.getReview(req.params.id);
      return res.json(review);
    } catch (e) {
      return res.status(404).json({ error: e });
    }
  })
  .patch(async (req, res) => {
    //code for PATCH
    try {
      req.params.id = validateId(req.params.reviewId, 'Id URL Param');
    } catch (e) {
      return res.status(400).json({ error: e });
    }
    let reviewInfo = req.body;
    if (!reviewInfo || Object.keys(reviewInfo).length === 0) {
      return res
        .status(400)
        .json({ error: 'There are no fields in the request body' });
    }
    try {
      reviewInfo = validateUpdateReviewInput(req.params.id, reviewInfo);
    } catch (e) {
      return res.status(400).json({ error: e });
    }

    try {
      const updateReview = await reviewsData.updateReview(req.params.id, reviewInfo);
      return res.json(updateReview);
    } catch (e) {
      return res.status(404).send({ error: e });
    }
  })
  .delete(async (req, res) => {
    //code here for DELETE
    try {
      req.params.id = validateId(req.params.reviewId, 'Id URL Param');
    } catch (e) {
      return res.status(400).json({ error: e });
    }
    //try to delete review
    try {
      let deletedReview = await reviewsData.removeReview(req.params.id);
      return res.json(deletedReview);
    } catch (e) {
      return res.status(404).json({ error: e });
    }
  });

export default router;