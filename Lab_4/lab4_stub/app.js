/*

Create a product of your choice.
Log the newly created product. (Just that product, not all products)
Create another product of your choice.
Query all products, and log them all
Create the 3rd product of your choice.
Log the newly created 3rd product. (Just that product, not all product)
Rename the first product
Log the first product with the updated name. 
Remove the second product you created.
Query all products, and log them all
Try to create a product with bad input parameters to make sure it throws errors.
Try to remove a product that does not exist to make sure it throws errors.
Try to rename a product that does not exist to make sure it throws errors.
Try to rename a product passing in invalid data for the newProductName parameter to make sure it throws errors.
Try getting a product by ID that does not exist to make sure it throws errors.

*/

import { create, getAll, get, remove, rename } from './data/products.js';
import { dbConnection, closeConnection } from './config/mongoConnection.js';

const db = await dbConnection();
await db.dropDatabase();

let product_1_id = undefined;
let product_2_id = undefined;
let dummy_product_id = '65d7ba660ad328d71e93cd5f';

console.log("Creating a product.");
try {
    const product_1 = await create("83 inch LG C3 OLED TV", "The advanced LG OLED evo C-Series is better than ever. The LG OLED evo C3 is powered by the next-gen a9 AI Processor Gen6—exclusively made for LG OLED—for ultra-realistic picture and sound. And the Brightness Booster improves brightness so you get luminous picture and high contrast, even in well-lit rooms.* AI-assisted deep learning analyzes what you're watching to choose the best picture and sound setting for your content. The LG OLED evo C3 not only performs great, but looks great as well. With an almost invisible bezel, it will blend into the background for a seamless look. When you're finished watching, display paintings, photos and other content to blend the LG OLED evo C3 into your space even more. But that's not all. Experience less searching and more streaming, thanks to the next generation of AI technology from LG webOS 23. Every LG OLED comes loaded with Dolby Vision for extraordinary color, contrast and brightness, plus Dolby Atmos** for wrap-around sound. And LG's FILMMAKER MODE allows you to see films just as the director intended. Packed with gaming features, the LG OLED evo C-Series comes with everything you need to win like a 0.1ms response time, native 120Hz refresh rate and four HDMI 2.1 inputs. *Based on LG internal testing: 55/65/77/83 LG OLED evo C3 models are brighter than non-OLED evo B3 models and excludes the 42 and 48 LG OLED evo C3. **Dolby, Dolby Atmos and the double-D symbol are registered trademarks of Dolby Laboratories.",
        "OLED83C3PUA", 4757.29, "LG", "http://www.lgelectronics.com", ["TV", "Smart TV", "OLED", "LG", "Big Screen", "83 Inch"], ["Electronics", "Television & Video", "Televisions", "OLED TVs"],
        "02/10/2024", false);
    product_1_id = product_1._id;
    console.log("Logging the newly created product.");
    console.log('product_1 : ', product_1);
} catch (e) {
    console.log(e);
}

console.log("");
console.log("Get By Id.");
try {
    const product = await get(product_1_id);
    console.log('product : ', product);
} catch (e) {
    console.log(e);
}


console.log("");
console.log("Creating another product.");
try {
    const product_2 = await create("Apple iPhone 14 Pro 1TB - Space Grey", "The all new iPhone 14 pro has many upgraded features.",
        "MQ2L3LL/A", 1499, "Apple", "http://www.apple.com", ["Cell Phone", "Phone", "iPhone", "Apple", "Smartphone", "iPhone 14", "pro"], ["Electronics", "Cell Phones and Accessories", "Cell Phones"],
        "09/16/2022", false);
    product_2_id = product_2._id;
    console.log('product_2 : ', product_2);//
} catch (e) {
    console.log(e);
}

console.log("");
console.log("Querying all products, and logging them all.");
try {
    const productList = await getAll();
    console.log('productList : ', productList);
} catch (e) {
    console.log(e);
}

console.log("");
console.log("Creating another product.");
try {
    const product_3 = await create("Apple iPhone 13 mini 512GB - Product Red", "The iPhone 13 Mini is the perfect sized smartphone.",
        "MQ3L2ML/A", 999, "Apple", "http://www.apple.com", ["Cell Phone", "Phone", "iPhone", "Apple", "Smartphone", "iPhone 13", "mini", "smaller smartphones"], ["Electronics", "Cell Phones and Accessories", "Cell Phones"],
        "09/24/2021", false);
    console.log("Logging the newly created product.");
    console.log('product_3 : ', product_3);
} catch (e) {
    console.log(e);
}

console.log("");
console.log("Renaming the first product.");
try {
    const updatedProduct = await rename(product_1_id, 'LG C3 OLED TV');
    console.log("Logging the first product with the updated name");
    console.log('updatedProduct : ', updatedProduct);
} catch (e) {
    console.log(e);
}

console.log("");
console.log("Removing the second product.");
try {
    const removedProduct = await remove(product_2_id);
    console.log('removedProduct : ', removedProduct);//
} catch (e) {
    console.log(e);
}

console.log("");
console.log("Querying all products, and logging them all.");
try {
    const productList = await getAll();
    console.log('productList : ', productList);
} catch (e) {
    console.log(e);
}

console.log("");
console.log("Creating a product with bad input parameters to make sure it throws errors.");
try {
    const product_4 = await create("Apple iPhone 13 mini 512GB - Product Red", "The iPhone 13 Mini is the perfect sized smartphone.",
        "MQ3L2ML/A", 999, "Apple", "http://www.appl.com", ["Cell Phone", "Phone", "iPhone", "Apple", "Smartphone", "iPhone 13", "mini", "smaller smartphones"], ["Electronics", "Cell Phones and Accessories", "Cell Phones"],
        "09/24/2021", false);
    console.log('product_4 : ', product_4);
} catch (e) {
    console.log(e);
}

console.log("");
console.log("Removing a product that does not exist to make sure it throws errors.");
try {
    const removedProduct = await remove(dummy_product_id);
    console.log('removedProduct : ', removedProduct);
} catch (e) {
    console.log(e);
}

console.log("");
console.log("Renaming a product that does not exist to make sure it throws errors.");
try {
    const updatedProduct = await rename(dummy_product_id, 'LG C3 OLED TV');
    console.log('updatedProduct : ', updatedProduct);
} catch (e) {
    console.log(e);
}

console.log("");
console.log("Renaming a product passing in invalid data for the newProductName parameter to make sure it throws errors.");
try {
    const updatedProduct = await rename(product_1_id, 83);
    console.log('updatedProduct : ', updatedProduct);
} catch (e) {
    console.log(e);
}

console.log("");
console.log("Getting a product by ID that does not exist to make sure it throws errors.");
try {
    const product = await get(dummy_product_id);
    console.log('product : ', product);
} catch (e) {
    console.log(e);
}

await closeConnection();
console.log('Done!');