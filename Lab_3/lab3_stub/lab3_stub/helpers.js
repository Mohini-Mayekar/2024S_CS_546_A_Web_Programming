//Todo You can use this file for any helper functions you may need. This file is optional and you don't have to use it if you do not want to.

const url_authors = 'https://gist.githubusercontent.com/graffixnyc/a086a55e04f25e538b5d52a095fe4467/raw/e9f835e9a5439a647a24fa272fcb8f5a2b94dece/authors.json';

const url_books = 'https://gist.githubusercontent.com/graffixnyc/3381b3ba73c249bfcab1e44d836acb48/raw/e14678cd750a4c4a93614a33a840607dd83fdacc/books.json';

const state_abbr = ['AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FM', 'FL', 'GA', 'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MH', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'MP', 'OH', 'OK', 'OR', 'PW', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY'];

let checkisString = (str, variable) => {
    if (typeof str !== 'string') throw `Input '${variable || 'provided'}' of value '${str || 'provided variable'}' is not a string.`;
};

let checkUndefinedOrNull = (obj, variable) => {
    if (obj === undefined || obj === null) throw `Input for '${variable || 'provided variable'}' param is undefined or null.`;
};

let hasSpaces = (s, variable) => {
    if ((s.replaceAll(/\s/g, '').length) === 0) throw `Input '${variable || 'provided'}' string of value '${s}' has just spaces.`;
};

let checkisNumber = (num, variable) => {
    if (typeof num !== 'number' || isNaN(num)) throw `Input '${variable || 'provided'}' of value '${num || 'provided variable'}' is not a number.`;
};

let checkisInteger = (int, bn_1_n_100, variable) => {
    if (!(Number.isInteger(int)) || int < 0) throw `Input '${variable || 'provided'}' of value ${int || 'provided variable'} is not a positive whole number.`;
    if (bn_1_n_100)
        if (int < 1 || int > 100) throw `Input '${variable || 'provided'}' of value ${int || 'provided variable'} is not a positive whole number between 1-100.`;
};

let checkValidState = (state) => {
    if (state.length !== 2) throw `Length of state '${state || 'provided '}' is not two chars.`;
    let st_abbr;
    st_abbr = state_abbr.find((ele) => {
        return (ele === state || ele.toLowerCase() === state || ele.toLowerCase() === state.toLowerCase());
    });
    if (st_abbr == undefined) throw `State '${state || 'provided'}' is invalid.`;
};


export {
    url_authors, url_books, checkValidState, checkisString, checkUndefinedOrNull, hasSpaces, checkisNumber, checkisInteger
}