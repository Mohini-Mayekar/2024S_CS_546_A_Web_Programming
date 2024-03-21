// You can add and export any helper functions you want here - if you aren't using any, then you can just leave this file as is
import { products } from './config/mongoCollections.js';
import { ObjectId } from 'mongodb';

const pattern = new RegExp(/^[-_.a-zA-Z0-9]+$/);

let checkUndefinedOrNull = (obj, variable) => {
    if (obj === undefined || obj === null) throw `All fields need to have valid values. Input for '${variable || 'provided variable'}' param is undefined or null.`;
};

let checkisValidString = (str, variable) => {
    //check input type is string
    if (typeof str !== 'string') throw `Input '${variable || 'provided'}' of value '${str || 'provided variable'}' is not a string.`;
    //empty string or has only spaces
    if ((str.replaceAll(/\s/g, '').length) === 0) throw `Input '${variable || 'provided'}' string of value '${str}' has just spaces or is an empty string.`;
    return str.trim();
};

let checkisValidNumber = (num, variable) => {
    if (typeof num !== 'number' || isNaN(num)) throw `Input '${variable || 'provided'}' of value '${num || 'provided variable'}' is not a number.`;
    if (variable === 'price') {
        if (num <= 0) throw `Input '${variable || 'provided'}' of value ${num || 'provided variable'} is not greater than zero.`;
        if (!(Number.isInteger(num)) && num.toString().split('.')[1].length > 2) throw `Input '${variable || 'provided'}' of value '${num || 'provided variable'}' is not a valid input. It allows only 2 decimal points`;
    }
    if (variable === 'rating') {
        if (!(num >= 1 && num <= 5)) throw `Input '${variable || 'provided'}' of value ${num || 'provided variable'} is invalid. Integer or floats will be accepted as long as they are in the valid range of 1 - 5.`;
        if (!(Number.isInteger(num)) && num.toString().split('.')[1].length > 1) throw `Input '${variable || 'provided'}' of value '${num || 'provided variable'}' is not a valid input. It allows only 1 decimal point`;
    }
};

let checkisValidWebsite = (str, variable) => {
    str = str.trim();
    if (!(str.startsWith("http://www.")) || !(str.endsWith(".com"))) throw `Input '${variable || 'provided'}' of value '${str || 'provided variable'}' is not a valid website.`;
    let webStr = str.slice((str.indexOf('.') + 1), str.lastIndexOf('.'));
    if (webStr.length < 5) throw `Input '${variable || 'provided'}' of value '${str || 'provided variable'}' doesnot have 5 chars in-between 'http://www.' and '.com'.`;
    if (!(pattern.test(webStr))) throw `Input '${variable || 'provided'}' of value '${str || 'provided variable'}' is an invalid URL.`;
    return str;
};

let checkisValidArray = (arr, variable) => {
    if (typeof arr !== 'object' || !(arr instanceof Array)) throw `Input '${variable || 'provided'}' of value '${arr || 'provided variable'}' is not an array.`;
    if (arr.length == 0) throw `Input '${variable || 'provided'}' of value '${arr || 'provided variable'}' is an empty array. It should contain at LEAST one element that's a valid string.`;
    for (let i in arr) {
        arr[i] = checkisValidString(arr[i], `${variable || 'provided'} array at index ${i}`);
    }
    return arr;
};

let checkisValidBoolean = (bool, variable) => {
    if (typeof bool !== 'boolean') throw `Input '${variable || 'provided'}' of value ${bool || 'provided'} is not a boolean.`;
};


let checkisValidDate = (date) => {
    /**
       * If dateReleased is not a valid date in mm/dd/yyyy format then the method should throw. 
       * You will not have to take into account leap years but it must be a valid date. 
       * For example: 9/31/2022 would not be valid as there are not 31 days in September. 
       * 2/30/1995 would not be valid as there are never 30 days in Feb. 
       */
    date = date.trim();
    if (!(date.includes("/")) || !(((date.split("/")).length) === 3)) throw `Invalid date format '${date || 'provided'}'. Expected format: 'mm/dd/yyyy'.`;
    let dateArr = date.split("/");
    let daysPerMonth = ['31', '28', '31', '30', '31', '30', '31', '31', '30', '31', '30', '31'];
    let months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
    let currMonth;
    for (let i in dateArr) {
        if (i < 2) {
            if (!(dateArr[i].length == 2)) throw `Invalid date format '${date || 'provided'}'. Expected format: 'mm/dd/yyyy'.`;
            if (i == 0) {
                //month
                if (!(months.includes(dateArr[i]))) throw `Invalid month passed in date '${date || 'provided'}'. Expected format: 'mm/dd/yyyy'.`;
                currMonth = parseInt(dateArr[i]);
            } else { //day
                if ((parseInt(dateArr[i])) > (parseInt(daysPerMonth[currMonth - 1]))) throw `Invalid day passed in date '${date || 'provided'}'. Expected format: 'mm/dd/yyyy'.`;
            }
        } else { //year
            if (!(dateArr[i].length == 4) || (dateArr[i] < 1000) || (dateArr[i] > 2024)) throw `Invalid year passed in date '${date || 'provided'}'. Expected format: 'mm/dd/yyyy'.`;
        }
    }
    let currDate = Date.now();
    if ((new Date(date)) > currDate) throw `Invalid date '${date || 'provided'}'.It should be before or equal to today's date.`;
    return date;
};

let validateId = (id, variable) => {
    checkUndefinedOrNull(id, variable);
    id = checkisValidString(id, variable);
    if (!ObjectId.isValid(id)) throw 'invalid object ID';
    return id;
};

let validateProductInput = (
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
    discontinued, isUpdate
) => {
    //TO DO validate productId using isUpdate flag
    if (isUpdate) {
        checkUndefinedOrNull(productId, 'productId');
    }
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

    if (isUpdate) {
        productId = checkisValidString(productId, 'productId');
        if (!ObjectId.isValid(productId)) throw `invalid object ID '${productId}'.`;
    }
    productName = checkisValidString(productName, 'productName');
    productDescription = checkisValidString(productDescription, 'productDescription');
    modelNumber = checkisValidString(modelNumber, 'modelNumber');
    manufacturer = checkisValidString(manufacturer, 'manufacturer');
    manufacturerWebsite = checkisValidString(manufacturerWebsite, 'manufacturerWebsite');
    dateReleased = checkisValidString(dateReleased, 'dateReleased');

    checkisValidNumber(price, 'price');

    manufacturerWebsite = checkisValidWebsite(manufacturerWebsite, 'manufacturerWebsite');

    keywords = checkisValidArray(keywords, 'keywords');
    categories = checkisValidArray(categories, 'categories');

    dateReleased = checkisValidDate(dateReleased);

    checkisValidBoolean(discontinued, 'discontinued');

    let product = {
        productName: productName,
        productDescription: productDescription,
        modelNumber: modelNumber,
        price: price,
        manufacturer: manufacturer,
        manufacturerWebsite: manufacturerWebsite,
        keywords: keywords,
        categories: categories,
        dateReleased: dateReleased,
        discontinued: discontinued,
        reviews: [],
        averageRating: 0
    };
    return product;
};

let validateReviewInput = (productId, title, reviewerName, review, rating) => {
    checkUndefinedOrNull(productId, 'productId');
    checkUndefinedOrNull(title, 'title');
    checkUndefinedOrNull(reviewerName, 'reviewerName');
    checkUndefinedOrNull(review, 'review');
    checkUndefinedOrNull(rating, 'rating');

    productId = checkisValidString(productId, 'productId');

    title = checkisValidString(title, 'title');
    reviewerName = checkisValidString(reviewerName, 'reviewerName');
    review = checkisValidString(review, 'review');

    if (!ObjectId.isValid(productId)) throw `invalid object ID '${productId}'.`;

    checkisValidNumber(rating, 'rating');

    let reviewObj = {
        title: title,
        reviewerName: reviewerName,
        review: review,
        rating: rating,
        reviewDate: getCurrDate()
    };
    return reviewObj;
};

let isPresentInInput = (obj) => {
    return (!(obj === undefined || obj === null));
};

let validateUpdateReviewInput = (reviewId, updateObj) => {
    let updatedReviewObj = {};
    checkUndefinedOrNull(reviewId, 'reviewId');
    checkUndefinedOrNull(updateObj, 'updateObject');
    if (isPresentInInput(updateObj.title)) {
        checkUndefinedOrNull(updateObj.title, 'title');
        updatedReviewObj.title = checkisValidString(updateObj.title, 'title');
    }
    if (isPresentInInput(updateObj.reviewerName)) {
        checkUndefinedOrNull(updateObj.reviewerName, 'reviewerName');
        updatedReviewObj.reviewerName = checkisValidString(updateObj.reviewerName, 'reviewerName');
    }
    if (isPresentInInput(updateObj.review)) {
        checkUndefinedOrNull(updateObj.review, 'review');
        updatedReviewObj.review = checkisValidString(updateObj.review, 'review');
    }
    if (isPresentInInput(updateObj.rating)) {
        checkUndefinedOrNull(updateObj.rating, 'rating');
        checkisValidNumber(updateObj.rating, 'rating');
        updatedReviewObj.rating = updateObj.rating;
    }
    updateObj.reviewDate = getCurrDate();
    updateObj._id = ObjectId.createFromHexString(reviewId);
    return updateObj;
};

let getCurrDate = () => { //mm/dd/yyyy
    let currDate = new Date();
    let currMonth = getData(currDate.getMonth() + 1);
    let currDay = getData(currDate.getDate());
    let currYear = currDate.getFullYear();
    let res = currMonth + '/' + currDay + '/' + currYear;
    return res;//`${currMonth}/${currDay}/${currYear}`;
};

let getData = (data) => {
    return (data) > 9 ? (data) : `0${(data)}`;
};

let updatedProd = async (productId, productObj, isUpdateProduct, isCreateReview, isUpdateReview, isRemoveReview) => {
    const productCollection = await products();
    let updateInfo;
    if (isUpdateProduct) {
        updateInfo = await productCollection.findOneAndReplace(
            { _id: ObjectId.createFromHexString(productId) },
            productObj,
            { returnDocument: 'after' }
        );
    } else {
        updateInfo = await productCollection.findOneAndUpdate(
            { _id: ObjectId.createFromHexString(productId) },
            { $set: productObj },
            { returnDocument: 'after' }
        );
    }
    if (!updateInfo) {
        if (isUpdateProduct)
            throw 'could not update product successfully';
        else if (isCreateReview)
            throw 'Could not add review';
        else if (isUpdateReview)
            throw 'could not update product successfully';
        else if (isRemoveReview)
            throw 'Could not update product rating after removing a review';
    }
    return updateInfo;
};

export {
    checkUndefinedOrNull, checkisValidString, checkisValidNumber, checkisValidWebsite, checkisValidArray, checkisValidBoolean, checkisValidDate, validateId, validateProductInput, validateReviewInput, validateUpdateReviewInput, updatedProd
}
