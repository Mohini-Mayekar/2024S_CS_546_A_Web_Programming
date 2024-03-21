// This data file should export all functions using the ES6 standard as shown in the lecture code

import { products } from '../config/mongoCollections.js';
import { ObjectId } from 'mongodb';
import { validateReviewInput, validateId, validateUpdateReviewInput, updatedProd } from '../helpers.js'
import { productsData } from '../data/index.js';

const createReview = async (
  productId,
  title,
  reviewerName,
  review,
  rating
) => {
  let newReview = validateReviewInput(productId, title, reviewerName, review, rating);
  const product = await productsData.get(productId);
  let prodReviews = [];
  prodReviews = product.reviews;
  let reviewId = new ObjectId();
  newReview._id = reviewId;
  prodReviews.push(newReview);
  product.averageRating = calcAvgRating(prodReviews);
  delete product._id;
  const insertInfo = await updatedProd(productId, product, false, true, false, false);
  return insertInfo;
};

const getAllReviews = async (productId) => {
  productId = validateId(productId, 'productId');
  const product = await productsData.get(productId);
  if (product.reviews.length === 0)
    throw `No reviews found for product with id '${productId}'.`
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
  const productCollection = await products();
  const review = await getReview(reviewId);
  const productId = await getProductIdByReviewId(reviewId);
  //let updatedProduct = await productsData.get(productId._id.toString());
  let updatedRevObj = updatedReviewObj(review, updatedReview);
  const updateReviewInfo = await productCollection.findOneAndUpdate(
    { 'reviews._id': ObjectId.createFromHexString(reviewId) },
    { $set: { "reviews.$": updatedRevObj } },
    { returnDocument: 'after' }
  );
  if (!(review.rating === updatedReview.rating)) {
    //update avgRating for product
    let prodReviews = [];
    prodReviews = updateReviewInfo.reviews;
    updateReviewInfo.averageRating = calcAvgRating(prodReviews);
  }

  const updatedInfo = await updatedProd(productId._id.toString(), updateReviewInfo, false, false, true, false);
  return updatedInfo;

};

let updatedReviewObj = (oldObj, newObj) => {
  let updatedReviewObj = {};
  updatedReviewObj._id = newObj._id;
  updatedReviewObj.title = (newObj.title) ? newObj.title : oldObj.title;
  updatedReviewObj.reviewerName = (newObj.reviewerName) ? newObj.reviewerName : oldObj.reviewerName;
  updatedReviewObj.review = (newObj.review) ? newObj.review : oldObj.review;
  updatedReviewObj.rating = (newObj.rating) ? newObj.rating : oldObj.rating;
  updatedReviewObj.reviewDate = (newObj.reviewDate) ? newObj.reviewDate : oldObj.reviewDate;
  return updatedReviewObj;
};

const removeReview = async (reviewId) => {
  reviewId = validateId(reviewId, 'reviewId');

  const productCollection = await products();
  //get the product
  const productId = await getProductIdByReviewId(reviewId);
  //get the review obj
  //delete the review record
  const deletionInfo = await productCollection.updateOne(
    { 'reviews._id': ObjectId.createFromHexString(reviewId) },
    { $pull: { reviews: { _id: ObjectId.createFromHexString(reviewId) } } }
  );

  if (!deletionInfo || !deletionInfo.acknowledged) {
    throw `Could not delete review with id of ${reviewId}`;
  }
  const product = await productsData.get(productId._id.toString());
  let prodReviews = [];
  prodReviews = product.reviews;
  product.averageRating = calcAvgRating(prodReviews);
  delete product._id;

  const insertInfo = await updatedProd(productId._id.toString(), product, false, false, false, true);
  const productInfo = await productsData.get(productId._id.toString());
  return productInfo;
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
    avgRating = sumRating / len;
    if (!(Number.isInteger(avgRating)) && avgRating.toString().split('.')[1].length > 1) {
      avgRating = oneDecimal(avgRating);
    }
  }
  return avgRating;
};

let oneDecimal = (num) => {
  let decimal = num.toString().split('.')[1];
  let deci = decimal.toString().slice(0, 1);
  let res = num.toString().split('.')[0] + "." + deci;
  return parseFloat(res);
};

let getProductIdByReviewId = async (reviewId) => {
  const productCollection = await products();
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
