//You can add and export any helper functions you want here. If you aren't using any, then you can just leave this file as is.
import validator from "validator";

const url_companies = 'https://gist.githubusercontent.com/graffixnyc/90b56a2abf10cfd88b2310b4a0ae3381/raw/f43962e103672e15f8ec2d5e19106e9d134e33c6/companies.json';//f43962e103672e15f8ec2d5e19106e9d134e33c6

const url_people = 'https://gist.githubusercontent.com/graffixnyc/448017f5cb43e0d590adb744e676f4b5/raw/495e09557914db5d2f40141aaef60113eb19bb41/people.json';

let checkisValidId = (id, variable) => {
    if (id === undefined || id === null) throw `All fields need to be supplied. Input for '${variable || 'provided variable'}' param is undefined or null.`;
    //check input type is string
    if (typeof id !== 'string') throw `Input '${variable || 'provided'}' of value '${id || 'provided variable'}' is not a string.`;
    //empty string or has only spaces
    if ((id.replaceAll(/\s/g, '').length) === 0) throw `Input '${variable || 'provided'}' string of value '${id}' has just spaces or is an empty string.`;
    id = id.trim();
    //check for UUID
    if (!(validator.isUUID(id))) throw `Input '${variable || 'provided'}' string of value '${id}' is an invalid id.`;
    return id;
};

let err_handler = (res, e) => {
    let statusCode = 500;
    if (e == 'Invalid URL') statusCode = 400;
    else if (e.toString().includes('Not Found')) statusCode = 404;
    return res.status(statusCode).json({ error: e });
};

let err_handler_data = (entity, e, isById) => {
    if (e.code === 'ENOTFOUND') throw 'Invalid URL';
    else if (e.response)
        if (isById) throw `${entity} ${e.response.statusText}!`;
        else throw `${e.response.statusText}`;
    else throw `${e}`;
};

export {
    url_companies, url_people, checkisValidId, err_handler, err_handler_data
}