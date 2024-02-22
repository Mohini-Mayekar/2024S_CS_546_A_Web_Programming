/* Todo: Implment the functions below and then export them
      using the ES6 exports syntax. 
      DO NOT CHANGE THE FUNCTION NAMES
*/

import { checkUndefinedOrNull, checkisObject, checkisArray, isArray, isObject, checkisNumber } from './helpers.js';

let objectStats = (arrObjects) => {
  //Code goes here
  let resObj = { mean: 0, median: 0, mode: 0, range: 0, minimum: 0, maximum: 0, count: 0, sum: 0 };
  checkUndefinedOrNull(arrObjects);
  checkisArray(arrObjects);
  let m = arrObjects.length;//row length
  if (m < 1) throw 'arrObjects should have atleast 1 elements.';
  let arrKeys = [];
  //Iterate over the array obj and get all the key values
  for (let i = 0; i < m; i++) {
    checkUndefinedOrNull(arrObjects[i]);
    checkisObject(arrObjects[i]);
    if (arrObjects[i].length === 0 || Object.values(arrObjects[i]).length === 0) throw 'Each object in the array should not be empty and have atleast one key-val pair.';

    let objKeys = Object.values(arrObjects[i]);
    objKeys.forEach(ele => {
      checkisNumber(ele);
      if (!Number.isInteger(ele) && ele.toString().split('.')[1].length > 3) throw 'Decimal numbers can be upto three decimal places.';
      arrKeys.push(Number.isInteger(ele) ? ele : parseFloat(ele.toFixed(3)));
    })
  }
  //sort ASC
  arrKeys.sort(function (a, b) { return a - b });
  let arrLen = arrKeys.length;
  let map = new Map();
  let max = Number.MIN_VALUE;
  let mode = 0;
  let totalSum = 0;
  let modeList = [];
  for (let i = 0; i < arrLen; i++) {
    totalSum += parseFloat(arrKeys[i].toFixed(3));
    if (!map.has(arrKeys[i])) {
      map.set(arrKeys[i], 0);
    }
    map.set(arrKeys[i], map.get(arrKeys[i]) + 1);
    if (max < map.get(arrKeys[i])) {
      max = map.get(arrKeys[i]);
      modeList = [];
    }
    if (max == map.get(arrKeys[i])) {
      modeList.push(arrKeys[i]);
    }
  }

  if (modeList.length == 0 || modeList.length == map.size) {
    mode = 0;
  } else if (modeList.length == 1) {
    mode = modeList[0];
  } else {
    mode = modeList;
  }

  resObj['mean'] = parseFloat((totalSum / arrLen).toFixed(3));
  if (arrLen % 2 === 0) {
    let temp = parseFloat((arrKeys[(arrLen / 2) - 1] + arrKeys[arrLen / 2]).toFixed(3));
    resObj['median'] = parseFloat((temp / 2).toFixed(3));
  } else {
    resObj['median'] = parseFloat((arrKeys[(arrLen - 1) / 2]).toFixed(3));
  }
  resObj['mode'] = mode;
  resObj['minimum'] = arrKeys[0];
  resObj['maximum'] = arrKeys[arrLen - 1];
  resObj['range'] = parseFloat((resObj['maximum'] - resObj['minimum']).toFixed(3));
  resObj['count'] = arrLen;
  resObj['sum'] = totalSum;

  return resObj;
};

let nestedObjectsDiff = (obj1, obj2) => {
  //Code goes here
  checkUndefinedOrNull(obj1);
  checkUndefinedOrNull(obj2);
  checkisObject(obj1);
  checkisObject(obj2);
  let m = Object.keys(obj1).length;
  let n = Object.keys(obj2).length;
  if (m === 0 || n === 0) throw 'Each object in the array should have atleast one key-val pair.';

  return objDiff(obj1, obj2);

};

//recursive function
let objDiff = (obj1, obj2) => {
  let diff = {};
  //Iterate over obj1
  for (let key in obj1) {
    //Key present in obj2
    if (obj2.hasOwnProperty(key)) {
      //check both i/p value types are objects
      if (isObject(obj1[key]) && isObject(obj2[key])) {
        //check both are arrays
        if (isArray(obj1[key]) && isArray(obj2[key])) {
          //len of arrays is not same or elements of both the arrays are different - copy obj2 val to diff
          if (obj1[key].length !== obj2[key].length) {
            diff[key] = obj2[key];
          } else {
            if (!compareArr(obj1[key], obj2[key])) {
              diff[key] = obj2[key];
            }
          }
        } else if (isArray(obj1[key]) || isArray(obj2[key])) {//check if either are arrays
          diff[key] = obj2[key];
        } else { //both are type of objects
          //Make a recursive call - iterate over the result and add to diff
          let nestedDiff = objDiff(obj1[key], obj2[key]);
          if (Object.keys(nestedDiff).length > 0) {
            diff[key] = nestedDiff;
          }
        }
      } else if (obj1[key] !== obj2[key]) {//type is not object, same key & diff val - copy obj2 val to diff
        diff[key] = obj2[key];
      }
    } else {//key is not present in obj2 set key to undefined
      diff[key] = undefined;
    }
  }

  //Iterate over obj2 - cases when obj2 has keys which are not present in obj1
  for (let key in obj2) {
    if (!obj1.hasOwnProperty(key)) {
      diff[key] = obj2[key];
    }
  }
  return diff;
}

//Iterate over arrays and campare each ele to check if arrays are same
let compareArr = (arr1, arr2) => {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

let mergeAndSumValues = (...args) => {
  //this function takes in a variable number of objects that's what the ...args signifies
  checkUndefinedOrNull(args);
  let m = args.length;
  if (m == 0 || m === undefined) throw 'args should have atleast 1 input object.';
  let n = 0;
  let resObj = {};
  for (let i = 0; i < m; i++) {
    checkUndefinedOrNull(args[i]);
    checkisObject(args[i]);
    let objVals = Object.values(args[i]);
    n = objVals.length;
    if (n == 0 || n === undefined) throw 'Each object should have atleast one key-val pair.';


    objVals.forEach(ele => {
      if (!(typeof ele === 'number' || typeof ele === 'string') || isNaN(ele)) throw 'Value is not a number or a number string.';
      if (typeof ele === 'string') {
        if (!(typeof Number(ele) === 'number' && !isNaN(Number(ele)))) throw 'Value is not a number or a number string.';
      }
    });
  }

  for (let i = 0; i < m; i++) {
    let currObj = args[i];
    let objKeys = Object.keys(currObj);
    objKeys.forEach(ele => {
      let currVal = Number.isInteger(currObj[ele]) ? currObj[ele] : Number(currObj[ele]);
      if (resObj.hasOwnProperty(ele)) {
        let tempVal = resObj[ele];
        tempVal = Number.isInteger(tempVal) ? tempVal : Number(tempVal);
        resObj[ele] = currVal + tempVal;
      } else {
        resObj[ele] = currVal;
      }
    });
  }
  return resObj;
};


export {
  objectStats, nestedObjectsDiff, mergeAndSumValues
} 