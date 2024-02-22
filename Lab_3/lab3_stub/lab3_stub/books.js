//TODO EXPORT AND IMPLEMENT THE FOLLOWING FUNCTIONS IN ES6 FORMAT
//Books data link: https://gist.githubusercontent.com/graffixnyc/3381b3ba73c249bfcab1e44d836acb48/raw/e14678cd750a4c4a93614a33a840607dd83fdacc/books.json

import { url_books, checkisString, checkUndefinedOrNull, hasSpaces, checkisNumber, checkisInteger } from './helpers.js';
import axios from "axios";

const getBookById = async (id) => {
    checkUndefinedOrNull(id, 'bookId');
    checkisString(id, 'bookId');
    hasSpaces(id, 'bookId');
    id = id.trim();
    let data = new Array;
    data = await getBooks();
    let bookById = fetchBookById(id, data);
    if (bookById === undefined) throw `Book by id ${id || 'provided'} not found.`;
    return bookById;
};

let fetchBookById = (id, data) => {
    let bookById = data.find((ele) => {
        return ele['id'] === id;
    });
    return bookById;
};

const booksByPageCount = async (min, max) => {
    checkUndefinedOrNull(min, 'min');
    checkUndefinedOrNull(max, 'max');
    checkisNumber(min, 'min');
    checkisNumber(max, 'max');
    checkisInteger(min, false, 'min');
    checkisInteger(max, false, 'max');
    if (min >= max || max < 0) throw `'min' should be less than 'max' and 'max' should be greater than 0.`;
    let data = new Array;
    data = await getBooks();
    let res = new Array;
    data.filter((ele) => {
        let pageCnt = ele['pageCount'];
        if (pageCnt >= min && pageCnt <= max) {
            res.push(ele['id'].trim());
        }
    });
    return res;
};

const sameYear = async (year) => {
    checkUndefinedOrNull(year, 'year');
    checkisNumber(year, 'year');
    checkisInteger(year, false, 'year');
    //check year is valid
    if (year.toString().length != 4 || year < 1900 || year > 2024) throw `Input 'year' of value '${year || 'provided'}' is invalid.`;
    let data = new Array;
    data = await getBooks();
    let res = new Array;
    data.filter((ele) => {
        let pubYear = ele['publicationDate'].split("/")[2]; //"3/22/1959"
        if (year == pubYear) {
            res.push(ele);
        }
    });
    return res;
};

const minMaxPrice = async () => {
    let res = { cheapest: [], mostExpensive: [] };
    let data = new Array;
    data = await getBooks();
    //Sort ASC
    let min = Number.MAX_VALUE;
    let max = Number.MIN_VALUE;
    data.sort(function (a, b) {
        if (a['price'] > b['price']) return 1;
        else return -1;
    });
    min = data[0]['price'];
    max = data[data.length - 1]['price'];
    let cheapest = new Array;
    let mostExpensive = new Array;
    data.filter((ele) => {
        if (min == ele['price']) {
            cheapest.push(ele['id']);
        }
        if (max == ele['price']) {
            mostExpensive.push(ele['id']);
        }
    });
    res['cheapest'] = cheapest;
    res['mostExpensive'] = mostExpensive;
    return res;
};

const searchBooksByPublisher = async (publisher) => {
    checkUndefinedOrNull(publisher, 'publisher');
    checkisString(publisher, 'publisher');
    hasSpaces(publisher, 'publisher');//to check
    publisher = publisher.trim();
    let data = new Array;
    data = await getBooks();
    let res = new Array;
    data.filter((ele) => {
        let publishr = ele['publisher'];
        if (publisher == publishr) {
            res.push(ele['id']);
        }
    });
    if (res.length === 0) throw `No books are found for the '${publisher || 'given'}' publisher.`;
    return res;
};

async function getBookNamesByBookId(bookIdList) {
    let booksList = new Array;
    let bookData = new Array;
    bookData = await getBooks();
    bookIdList.forEach((ele) => {
        let book = fetchBookById(ele, bookData);
        booksList.push(book['title']);
    });
    return booksList;
}


async function getBooks() {
    const { data } = await axios.get(url_books);
    return data; // this will be the array of book objects
}

export {
    getBooks, getBookById, booksByPageCount, sameYear, minMaxPrice, searchBooksByPublisher, getBookNamesByBookId
}