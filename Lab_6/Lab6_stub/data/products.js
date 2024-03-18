// This data file should export all functions using the ES6 standard as shown in the lecture code

import { products } from '../config/mongoCollections.js';
import { ObjectId } from 'mongodb';
import { validateProductInput, validateId } from '../helpers.js'

const create = async (
  productName,
  productDescription,
  modelNumber,
  price,
  manufacturer,
  manufacturerWebsite,
  keywords,
  categories,
  dateReleased,
  discontinued
) => {
  let newProduct = validateProductInput(null, productName, productDescription, modelNumber, price, manufacturer, manufacturerWebsite, keywords, categories, dateReleased, discontinued, false);

  const productCollection = await products();
  const insertInfo = await productCollection.insertOne(newProduct);
  if (!insertInfo.acknowledged || !insertInfo.insertedId)
    throw 'Could not add product';

  const newId = insertInfo.insertedId.toString();

  const product = await get(newId);
  return product;
};

const getAll = async () => {
  const productCollection = await products();
  let productList = await productCollection.find({}).project({ _id: 1, productName: 1 }).toArray();
  if (!productList) throw 'Could not get all products';
  productList = productList.map((element) => {
    element._id = element._id.toString();
    return element;
  });
  return productList;
};

const get = async (productId) => {
  productId = validateId(productId, 'productId');
  const productCollection = await products();
  const product = await productCollection.findOne({ _id: new ObjectId(productId) });
  if (product === null) throw `No product with productId '${productId}'.`;
  product._id = product._id.toString();
  return product;
};

const remove = async (productId) => {
  productId = validateId(productId, 'productId');
  const productCollection = await products();
  const deletionInfo = await productCollection.findOneAndDelete({
    _id: new ObjectId(productId)
  });

  if (!deletionInfo) {
    throw `Could not delete product with productId of ${productId}`;
  }
  let resObj = {
    "_id": productId,
    "deleted": true
  }
  return resObj;
};

const update = async (
  productId,
  productName,
  productDescription,
  modelNumber,
  price,
  manufacturer,
  manufacturerWebsite,
  keywords,
  categories,
  dateReleased,
  discontinued
) => {
  let updatedProduct = validateProductInput(productId, productName, productDescription, modelNumber, price, manufacturer, manufacturerWebsite, keywords, categories, dateReleased, discontinued, true);

  const product = await get(productId);

  updatedProduct.averageRating = product.averageRating;
  updatedProduct.reviews = product.reviews;

  const productCollection = await products();

  const updatedInfo = await productCollection.findOneAndUpdate(
    { _id: ObjectId.createFromHexString(productId) },
    { $set: updatedProduct },
    { returnDocument: 'after' }
  );
  if (!updatedInfo) {
    throw 'could not update product successfully';
  }
  updatedInfo._id = updatedInfo._id.toString();
  return updatedInfo;
};



export default {
  create, getAll, get, remove, update
}