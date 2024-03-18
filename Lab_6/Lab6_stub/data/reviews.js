// This data file should export all functions using the ES6 standard as shown in the lecture code

import { products } from '../config/mongoCollections.js';
import { ObjectId } from 'mongodb';
import { validateReviewInput, validateId, validateUpdateReviewInput } from '../helpers.js'
import { productsData } from '../data/index.js';

const createReview = async (
  productId,
  title,
  reviewerName,
  review,
  rating
) => {
  let newReview = validateReviewInput(null, productId, title, reviewerName, review, rating, false);
  const product = await productsData.get(productId);
  let prodReviews = [];
  prodReviews = product.reviews;
  let reviewId = new ObjectId();
  newReview._id = reviewId;
  prodReviews.push(newReview);
  //product.reviews = prodReviews;
  product.averageRating = calcAvgRating(prodReviews);
  delete product._id;
  const productCollection = await products();
  const insertInfo = await productCollection.findOneAndUpdate(
    { _id: ObjectId.createFromHexString(productId) },
    { $set: product },
    { returnDocument: 'after' }
  );
  if (!insertInfo)
    throw 'Could not add review';

  return insertInfo;
};

const getAllReviews = async (productId) => {
  productId = validateId(productId, 'productId');
  const product = await productsData.get(productId);
  return product.reviews;
};

const getReview = async (reviewId) => {
  reviewId = validateId(reviewId, 'reviewId');
  const productCollection = await products();
  const review = await productCollection.findOne(
    { 'reviews._id': ObjectId.createFromHexString(reviewId) },
    { projection: { _id: 0, 'reviews.$': 1 } }
  );
  if (review === null || review === undefined || !review) throw `No review with id '${reviewId}'.`;
  return review.reviews[0];
};

const updateReview = async (reviewId, updateObject) => {
  reviewId = validateId(reviewId, 'reviewId');
  let updatedReview = validateUpdateReviewInput(reviewId, updateObject);

  const review = await getReview(reviewId);
  const productId = await getProductIdByReviewId(reviewId);
  let updatedProduct = await productsData.get(productId);
  let prodReviews = [];
  prodReviews = updatedProduct.reviews;
  prodReviews.push(updatedReview);
  if (!(review.rating === updateReview.rating)) {
    //update avgRating for product
    updatedProduct.averageRating = calcAvgRating(prodReviews);
  }

  const productCollection = await products();

  const updatedInfo = await productCollection.findOneAndUpdate(
    { _id: ObjectId.createFromHexString(productId) },
    { $set: updatedProduct },
    { returnDocument: 'after' }
  );
  if (!updatedInfo) {
    throw 'could not update product successfully';
  }
  //updatedInfo._id = updatedInfo._id.toString();
  return updatedInfo;

};

const removeReview = async (reviewId) => {
  reviewId = validateId(reviewId, 'reviewId');

  const productCollection = await products();
  ////const deletionInfo = await productCollection.findOneAndDelete({ 'reviews._id': ObjectId.createFromHexString(reviewId) });
  const productId = await getProductIdByReviewId(reviewId);
  const deletionInfo = await productCollection.updateOne(
    { 'reviews._id': ObjectId.createFromHexString(reviewId) },
    { $pull: { reviews: { _id: ObjectId.createFromHexString(reviewId) } } }
  );

  if (!deletionInfo || !deletionInfo.acknowledged) {
    throw `Could not delete review with id of ${reviewId}`;
  }
  const product = await productsData.get(productId.toString());
  let prodReviews = [];
  prodReviews = product.reviews;
  product.averageRating = calcAvgRating(prodReviews);

  const insertInfo = await productCollection.findOneAndUpdate(
    { _id: ObjectId.createFromHexString(productId) },
    { $set: product },
    { returnDocument: 'after' }
  );
  if (!insertInfo)
    throw 'Could not update product rating after removing a review';
  return product;
};

let calcAvgRating = (prodReviews) => {
  let len = prodReviews.length;
  let avgRating = 0;
  let sumRating = 0;
  if (len > 0) {
    for (let i = 0; i < len; i++) {
      let currReview = prodReviews[i];
      sumRating += currReview.rating;
    }
    avgRating = (sumRating / len).toFixed(1);
  }
  return avgRating;
};

let getProductIdByReviewId = async (reviewId) => {
  const productId = await productCollection.findOne(
    { 'reviews._id': ObjectId.createFromHexString(reviewId) },
    { projection: { _id: 1 } }
  );
  if (productId === null || productId === undefined || !productId) throw `No review with id '${reviewId}'.`;
  return productId;
};

export default {
  createReview, getAllReviews, getReview, updateReview, removeReview
}
