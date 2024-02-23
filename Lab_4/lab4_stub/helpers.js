// You can add and export any helper functions you want here. If you aren't using any, then you can just leave this file as is.


let checkUndefinedOrNull = (obj, variable) => {
    if (obj === undefined || obj === null) throw `All fields need to be supplied. Input for '${variable || 'provided variable'}' param is undefined or null.`;
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
    if (num <= 0) throw `Input '${variable || 'provided'}' of value ${num || 'provided variable'} is not greater than zero.`;
    if (!(Number.isInteger(num)) && num.toString().split('.')[1].length > 2) throw `Input '${variable || 'provided'}' of value '${num || 'provided variable'}' is not a valid input. It allows only 2 decimal points`;
};

let checkisValidWebsite = (str, variable) => {
    str = str.trim();
    if (!(str.startsWith("http://www.")) || !(str.endsWith(".com"))) throw `Input '${variable || 'provided'}' of value '${str || 'provided variable'}' is not a valid website.`;
    if ((str.slice((str.indexOf('.') + 1), str.lastIndexOf('.'))).length < 5) throw `Input '${variable || 'provided'}' of value '${str || 'provided variable'}' doesnot have 5 chars in-between 'http://www.' and '.com'.`;
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
    let daysPerMonth = ['31', '29', '31', '30', '31', '30', '31', '31', '30', '31', '30', '31'];
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
};

export {
    checkUndefinedOrNull, checkisValidString, checkisValidNumber, checkisValidWebsite, checkisValidArray, checkisValidBoolean, checkisValidDate
}
