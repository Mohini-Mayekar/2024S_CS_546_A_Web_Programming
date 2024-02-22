//TODO EXPORT AND IMPLEMENT THE FOLLOWING FUNCTIONS IN ES6 FORMAT
//Authors data link: https://gist.githubusercontent.com/graffixnyc/a086a55e04f25e538b5d52a095fe4467/raw/e9f835e9a5439a647a24fa272fcb8f5a2b94dece/authors.json


//you must use axios to get the data
import axios from "axios";
import { url_authors, checkValidState, checkisString, checkUndefinedOrNull, hasSpaces, checkisNumber, checkisInteger } from './helpers.js';
import { getBookNamesByBookId } from './books.js';

const getAuthorById = async (id) => {
    checkUndefinedOrNull(id, 'authorId');
    checkisString(id, 'authorId');
    hasSpaces(id, 'authorId');
    id = id.trim();
    let data = new Array;
    data = await getAuthors();

    let authorById = fetchAuthorById(id, data);
    if (authorById === undefined) throw `Author by id '${id || 'provided'}' not found.`;
    return authorById;
};

let fetchAuthorById = (id, data) => {
    let authorById = data.find((ele) => {
        return ele['id'] === id;
    });
    return authorById;
};

const searchAuthorsByAge = async (age) => {
    checkUndefinedOrNull(age, 'age');
    checkisNumber(age, 'age');
    checkisInteger(age, true, 'age');
    let data = new Array;
    data = await getAuthors();
    let res = new Array;
    data.filter((ele) => {
        let currAge = calcAgeFromDOB(ele['date_of_birth']);
        if (currAge >= age) {
            res.push(ele['first_name'].trim() + ' ' + ele['last_name'].trim());
        }
    });
    return res;
};

//calculate age from DOB
let calcAgeFromDOB = (dateOfBirth) => {
    let dob = new Date(dateOfBirth);
    let currDate = Date.now();
    let dateDiff = currDate - dob.getTime();
    let diffDt = new Date(dateDiff);
    let year = diffDt.getUTCFullYear();
    return Math.abs(year - 1970);
};

const getBooksByState = async (state) => {
    checkUndefinedOrNull(state, 'state');
    checkisString(state, 'state');
    hasSpaces(state, 'state');
    state = state.trim();
    //validate Abbr
    checkValidState(state);
    let data = new Array;
    data = await getAuthors();
    let bookIdList = new Array;
    data.filter((ele) => {
        if (ele['HometownState'].toLowerCase() === state.toLowerCase()) {
            let books = ele['books'];
            books.forEach(element => {
                //console.log(element);
                bookIdList.push(element.trim());
            });
        }
    });
    if (bookIdList.length === 0) return bookIdList;
    //make a call to book.js
    let booksList = new Array;
    booksList = getBookNamesByBookId(bookIdList);
    return booksList;
};

const searchAuthorsByHometown = async (town, state) => {
    checkUndefinedOrNull(town, 'town');
    checkUndefinedOrNull(state, 'state');
    checkisString(town, 'town');
    checkisString(state, 'state');
    hasSpaces(town, 'town');
    hasSpaces(state, 'state');
    town = town.trim();
    state = state.trim();
    //valid Abbr
    checkValidState(state);
    let data = new Array;
    data = await getAuthors();
    let res = new Array;
    data.filter((ele) => {
        if ((ele['HometownCity'].toLowerCase() === town.toLowerCase()) && (ele['HometownState'].toLowerCase() === state.toLowerCase())) {
            res.push(ele['first_name'] + ' ' + ele['last_name']);
        }
    });
    //Sort by lastName
    res.sort(function (a, b) {
        if (a.split(' ')[1] > b.split(' ')[1]) return 1;
        else return -1;
    });
    return res;
};

const getAuthorBooks = async (authorid) => {
    checkUndefinedOrNull(authorid, 'authorid');
    checkisString(authorid, 'authorid');
    hasSpaces(authorid, 'authorid');
    authorid = authorid.trim();
    //valid authorId - to be found in data
    let data = new Array;
    data = await getAuthors();
    let authorById = fetchAuthorById(authorid, data);
    if (authorById === undefined) throw `Author by id '${authorid || 'provided'}' not found.`;
    let bookIdList = new Array;
    data.filter((ele) => {
        if (ele['id'] === authorid) {
            let books = ele['books'];
            books.forEach(element => {
                //console.log(element);
                bookIdList.push(element.trim());
            });
        }
    });
    if (bookIdList.length === 0) return bookIdList;
    //make a call to book.js
    let booksList = new Array;
    booksList = getBookNamesByBookId(bookIdList);
    return booksList;
};

async function getAuthors() {
    const { data } = await axios.get(url_authors);
    return data; // this will be the array of author objects
}

export {
    getAuthors, getAuthorById, searchAuthorsByAge, getBooksByState, searchAuthorsByHometown, getAuthorBooks, calcAgeFromDOB
}