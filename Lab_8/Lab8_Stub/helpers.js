
const url_moviesByName = 'http://www.omdbapi.com/?apikey=CS546&s=title';

const url_moviesById = 'http://www.omdbapi.com/?apikey=CS546&i=id';

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

let validateId = (id, variable) => {
    checkUndefinedOrNull(id, variable);
    id = checkisValidString(id, variable);
    //TO DO : check is valid IMDB ID
    validateIMDBId(id);
    return id;
};

let validateIMDBId = (id) => {
    if (!(id.length >= 9 && id.startsWith("tt") && (parseInt(id.split("tt")[1]) != NaN))) throw 'invalid IMDB ID';
};

export {
    url_moviesByName, url_moviesById, checkUndefinedOrNull, checkisValidString, validateId
}