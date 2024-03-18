// Import the express router as shown in the lecture code
// Note: please do not forget to export the router!
import express from 'express';
import { productsData } from '../data/index.js';
import { validateProductInput, validateId } from '../helpers.js'

const router = express.Router();

router
  .route('/')
  .get(async (req, res) => {
    //code here for GET
    try {
      const productsList = await productsData.getAll();
      return res.json(productsList);
    } catch (e) {
      return res.status(500).json({ error: e });
    }
  })
  .post(async (req, res) => {
    //code here for POST
    let productData = req.body;
    //make sure there is something present in the req.body
    if (!productData || Object.keys(productData).length === 0) {
      return res
        .status(400)
        .json({ error: 'There are no fields in the request body' });
    }
    //check all inputs, that should respond with a 400
    try {
      productData = validateProductInput(null, productData.productName, productData.productDescription, productData.modelNumber, productData.price, productData.manufacturer, productData.manufacturerWebsite, productData.keywords, productData.categories, productData.dateReleased, productData.discontinued, false);
    } catch (e) {
      return res.status(400).json({ error: e });
    }

    //create the product
    try {

      const newProduct = await productsData.create(productData.productName, productData.productDescription, productData.modelNumber, productData.price, productData.manufacturer, productData.manufacturerWebsite, productData.keywords, productData.categories, productData.dateReleased, productData.discontinued);
      return res.json(newProduct);
    } catch (e) {
      return res.status(500).json({ error: e });
    }
  });

router
  .route('/:productId')
  .get(async (req, res) => {
    //code here for GET
    try {
      req.params.id = validateId(req.params.productId, 'Id URL Param');
    } catch (e) {
      return res.status(400).json({ error: e });
    }
    //try getting the product by ID
    try {
      const product = await productsData.get(req.params.id);
      return res.json(product);
    } catch (e) {
      return res.status(404).json({ error: e });
    }
  })
  .delete(async (req, res) => {
    //code here for DELETE
    try {
      req.params.id = validateId(req.params.productId, 'Id URL Param');
    } catch (e) {
      return res.status(400).json({ error: e });
    }
    //try to delete post
    try {
      let deletedProduct = await productsData.remove(req.params.id);
      return res.json(deletedProduct);
    } catch (e) {
      return res.status(404).json({ error: e });
    }
  })
  .put(async (req, res) => {
    //code here for PUT
    try {
      req.params.id = validateId(req.params.productId, 'Id URL Param');
    } catch (e) {
      return res.status(400).json({ error: e });
    }
    let updatedData = req.body;
    //make sure there is something in the req.body
    if (!updatedData || Object.keys(updatedData).length === 0) {
      return res
        .status(400)
        .json({ error: 'There are no fields in the request body' });
    }
    //check all the inputs that will return 400 if they fail
    try {
      updatedData = validateProductInput(req.params.id, updatedData.productName, updatedData.productDescription, updatedData.modelNumber, updatedData.price, updatedData.manufacturer, updatedData.manufacturerWebsite, updatedData.keywords, updatedData.categories, updatedData.dateReleased, updatedData.discontinued, true);
    } catch (e) {
      return res.status(400).json({ error: e });
    }
    //try to update the product
    try {
      const updatedProduct = await productsData.update(req.params.id, updatedData.productName, updatedData.productDescription, updatedData.modelNumber, updatedData.price, updatedData.manufacturer, updatedData.manufacturerWebsite, updatedData.keywords, updatedData.categories, updatedData.dateReleased, updatedData.discontinued);
      return res.json(updatedProduct);
    } catch (e) {
      return res.status(404).json({ error: e });
    }
  });

export default router;