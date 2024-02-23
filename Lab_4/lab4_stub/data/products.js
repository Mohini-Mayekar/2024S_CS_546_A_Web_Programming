// TODO: Export and implement the following functions in ES6 format

import { products } from '../config/mongoCollections.js';
import { ObjectId } from 'mongodb';
import { checkUndefinedOrNull, checkisValidString, checkisValidNumber, checkisValidWebsite, checkisValidArray, checkisValidBoolean, checkisValidDate } from '../helpers.js'


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
  checkUndefinedOrNull(productName, 'productName');
  checkUndefinedOrNull(productDescription, 'productDescription');
  checkUndefinedOrNull(modelNumber, 'modelNumber');
  checkUndefinedOrNull(price, 'price');
  checkUndefinedOrNull(manufacturer, 'manufacturer');
  checkUndefinedOrNull(manufacturerWebsite, 'manufacturerWebsite');
  checkUndefinedOrNull(keywords, 'keywords');
  checkUndefinedOrNull(categories, 'categories');
  checkUndefinedOrNull(dateReleased, 'dateReleased');
  checkUndefinedOrNull(discontinued, 'discontinued');

  // checkisValidString(productName, 'productName');
  // checkisValidString(productDescription, 'productDescription');
  // checkisValidString(modelNumber, 'modelNumber');
  // checkisValidString(manufacturer, 'manufacturer');
  // checkisValidString(manufacturerWebsite, 'manufacturerWebsite');
  // checkisValidString(dateReleased, 'dateReleased');

  productName = checkisValidString(productName, 'productName');
  productDescription = checkisValidString(productDescription, 'productDescription');
  modelNumber = checkisValidString(modelNumber, 'modelNumber');
  manufacturer = checkisValidString(manufacturer, 'manufacturer');
  manufacturerWebsite = checkisValidString(manufacturerWebsite, 'manufacturerWebsite');
  dateReleased = checkisValidString(dateReleased, 'dateReleased');

  checkisValidNumber(price, 'price');

  checkisValidWebsite(manufacturerWebsite, 'manufacturerWebsite');

  // checkisValidArray(keywords, 'keywords');
  // checkisValidArray(categories, 'categories');

  keywords = checkisValidArray(keywords, 'keywords');
  categories = checkisValidArray(categories, 'categories');

  checkisValidDate(dateReleased);

  checkisValidBoolean(discontinued, 'discontinued');


  let newProduct = {
    productName: productName,//.trim()
    productDescription: productDescription,//.trim()
    modelNumber: modelNumber,//.trim()
    price: price,
    manufacturer: manufacturer,//.trim()
    manufacturerWebsite: manufacturerWebsite,//.trim()
    keywords: keywords,
    categories: categories,
    dateReleased: dateReleased,//.trim()
    discontinued: discontinued
  };

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
  let productList = await productCollection.find({}).toArray();
  if (!productList) throw 'Could not get all products';
  productList = productList.map((element) => {
    element._id = element._id.toString();
    return element;
  });
  return productList;
};

const get = async (id) => {
  checkUndefinedOrNull(id, 'id');
  checkisValidString(id, 'id');
  id = id.trim();
  if (!ObjectId.isValid(id)) throw 'invalid object ID';
  const productCollection = await products();
  const product = await productCollection.findOne({ _id: new ObjectId(id) });
  if (product === null) throw `No product with id '${id}'.`;
  product._id = product._id.toString();
  return product;
};

const remove = async (id) => {
  checkUndefinedOrNull(id, 'id');
  checkisValidString(id, 'id');
  id = id.trim();
  if (!ObjectId.isValid(id)) throw `invalid object ID '${id}'.`;
  const productCollection = await products();
  const deletionInfo = await productCollection.findOneAndDelete({
    _id: new ObjectId(id)
  });

  if (!deletionInfo) {
    throw `Could not delete product with id of ${id}`;
  }
  return `${deletionInfo.productName} has been successfully deleted!`;
};

const rename = async (id, newProductName) => {
  checkUndefinedOrNull(id, 'id');
  checkisValidString(id, 'id');
  id = id.trim();
  if (!ObjectId.isValid(id)) throw `invalid object ID '${id}'.`;
  checkUndefinedOrNull(newProductName, 'newProductName');
  checkisValidString(newProductName, 'newProductName');
  newProductName = newProductName.trim();

  const product = await get(id);
  if (product.productName === newProductName) throw `New product name is same as the name stored in DB.`;

  let updatedProduct = {
    productName: newProductName,
    productDescription: product.productDescription,
    modelNumber: product.modelNumber,
    price: product.price,
    manufacturer: product.manufacturer,
    manufacturerWebsite: product.manufacturerWebsite,
    keywords: product.keywords,
    categories: product.categories,
    dateReleased: product.dateReleased,
    discontinued: product.discontinued
  };

  const productCollection = await products();

  const updatedInfo = await productCollection.findOneAndUpdate(
    { _id: ObjectId.createFromHexString(id) }, //new ObjectId(id) //
    { $set: updatedProduct },
    { returnDocument: 'after' }
  );
  if (!updatedInfo) {
    throw 'could not update product successfully';
  }
  updatedInfo._id = updatedInfo._id.toString();
  return updatedInfo;
};

export {
  create, getAll, get, remove, rename
}