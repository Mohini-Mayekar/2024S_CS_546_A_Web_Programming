/* Todo: Implment the functions below and then export them
      using the ES6 exports syntax. 
      DO NOT CHANGE THE FUNCTION NAMES
*/

import { checkUndefinedOrNull, checkisArray, checkisFunction, checkisNumber, checkisInteger } from './helpers.js';

let arrayPartition = (arrayToPartition, partitionFunc) => {
  //code goes here
  //Input validation
  checkUndefinedOrNull(arrayToPartition);
  checkUndefinedOrNull(partitionFunc);
  checkisArray(arrayToPartition);
  checkisFunction(partitionFunc);

  if (arrayToPartition.length === 0) throw 'arrayToPartition should not be an empty array.';

  let resArr = [];
  if (arrayToPartition.length > 1) {
    let resArrT = [];
    let resArrF = [];
    arrayToPartition.forEach(ele => {
      if (partitionFunc(ele)) {
        resArrT.push(ele);
      } else {
        resArrF.push(ele);
      }
    });
    resArr.push(resArrT);
    resArr.push(resArrF);
  } else {
    throw 'arrayToPartition should have atleast 2 elements.';
  }
  return resArr;
};

let arrayShift = (arr, n) => {
  //code goes here
  //Input validation
  checkUndefinedOrNull(arr);
  checkUndefinedOrNull(n);
  checkisArray(arr);
  checkisNumber(n);
  if (arr.length < 2) throw 'arr should have atleast 2 elements.';
  checkisInteger(n);
  //if (!Number.isInteger(n)) throw `${n || 'provided variable'} is not a whole number.`;

  let len = arr.length;
  let temp;
  if (Math.abs(n) > len) {
    n = n % len;
  }
  if (n > 0) {
    //shift right
    for (let i = n; i > 0; i--) {
      temp = arr.pop();
      arr.unshift(temp);
    }
  } else {
    //shift left
    for (let i = 0; i < Math.abs(n); i++) {
      temp = arr.shift();
      arr.push(temp);
    }
  }
  return arr;
};

let matrixOne = (matrix) => {
  //code goes here
  //Input validation
  checkUndefinedOrNull(matrix);
  checkisArray(matrix);

  let m = matrix.length;//row length
  if (m === 0) throw 'matrix is an empty array.';
  let n = matrix[0].length;//col length
  for (let i = 0; i < m; i++) {
    checkisArray(matrix[i]);
    if (matrix[i].length === 0) throw 'An element in the matrix is an empty array.';
    if (matrix[i].length !== n) throw 'All rows in the matrix are not of same length.';
    for (let j = 0; j < n; j++) {
      checkisNumber(matrix[i][j]);
      checkisInteger(matrix[i][j]);
    }
  }
  let setR = new Set();
  let setC = new Set();
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === 0) {
        setR.add(i);
        setC.add(j);
      }
    }
  }
  setR.forEach(ele => {
    for (let j = 0; j < n; j++) {
      matrix[ele][j] = 1;
    }
  })
  setC.forEach(ele => {
    for (let i = 0; i < m; i++) {
      matrix[i][ele] = 1;
    }
  })
  return matrix;
};

export {
  arrayPartition, arrayShift, matrixOne
} 
