/* Todo: Implment any helper functions below 
    and then export them for use in your other files.
*/

let checkUndefinedOrNull = (obj) => {
    if (obj === undefined || obj === null) throw `${obj || 'provided variable'} is undefined or null.`;
};

let checkisArray = (arr) => {
    if (typeof arr !== 'object' || !(arr instanceof Array))
        throw `${arr || 'provided variable'} is not an array.`;
};

let checkisFunction = (func) => {
    if (typeof func !== 'function') throw `${func || 'provided variable'} is not a function.`;
};

let checkisNumber = (num) => {
    if (typeof num !== 'number' || isNaN(num)) throw `${num || 'provided variable'} is not a number.`;
};

let checkisString = (str) => {
    if (typeof str !== 'string') throw `${str || 'provided variable'} is not a string.`;
};

let checkisObject = (ob) => {
    if (typeof ob !== 'object') throw `${ob || 'provided variable'} is not an object.`;
};

let isObject = (o) => {
    return typeof o === 'object';
};

let isArray = (a) => {
    return a instanceof Array;
};

let hasSpaces = (s) => {
    if ((s.replaceAll(/\s/g, '').length) === 0) throw `String '${s || 'provided variable'}' has just spaces.`;
};

let checkisInteger = (int) => {
    if (!Number.isInteger(int)) throw `${int || 'provided variable'} is not an integer/whole number.`;
};

export {
    checkUndefinedOrNull, checkisArray, checkisFunction, checkisNumber, checkisString, checkisObject, isObject, isArray, hasSpaces, checkisInteger
}