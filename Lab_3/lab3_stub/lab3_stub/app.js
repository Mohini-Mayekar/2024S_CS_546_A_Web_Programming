/*
This file is where you will import your functions from the two other files and run test cases on your functions by calling them with various inputs.  We will not use this file for grading and is only for your testing purposes to make sure:

1. Your functions in your 2 files are exporting correctly.

2. They are returning the correct output based on the input supplied (throwing errors when you're supposed to, returning the right results etc..).

Note: 
1. You will need that calls your functions like the example below. 
2. Do not create any other files beside the 'package.json' - meaning your zip should only have the files and folder in this stub and a 'package.json' file.
3. Submit all files (including package.json) in a zip with your name in the following format: LastName_FirstName.zip.
4. DO NOT submit a zip containing your node_modules folder.

import * as authors from "./authors.js");

    try{
        const authorData = await authors.getAuthors();
        console.log (authorData);
    }catch(e){
        console.log (e);
    }
*/


import { getAuthors, getAuthorById, searchAuthorsByAge, getBooksByState, searchAuthorsByHometown, getAuthorBooks, calcAgeFromDOB } from "./authors.js";
import { getBooks, getBookById, booksByPageCount, sameYear, minMaxPrice, searchBooksByPublisher } from "./books.js";


//Authors
console.log('   ***Authors    ');

console.log('   *getAuthors    ');
try {
    const authorData = await getAuthors();
    //console.log(authorData);
} catch (e) {
    console.log(e);
}

console.log('   *getAuthorById    ');
getAuthorById
try {
    const authorById = await getAuthorById('2155574a-80b0-4389-8bb3-3240da52b770');
    console.log(authorById);
} catch (e) {
    console.log(e);
}

try {
    const authorById = await getAuthorById(' ');
    console.log(authorById);
} catch (e) {
    console.log(e);
}


console.log('   *searchAuthorsByAge    ');
//searchAuthorsByAge
try {
    const authorsByAge = await searchAuthorsByAge(100);
    console.log(authorsByAge);
} catch (e) {
    console.log(e);
}

try {
    const authorsByAge = await searchAuthorsByAge('101');
    console.log(authorsByAge);
} catch (e) {
    console.log(e);
}

//console.log(calcAgeFromDOB('2/15/1913'));

console.log('   *getBooksByState    ');
//getBooksByState

try {
    const booksByState = await getBooksByState('NY');
    console.log(booksByState);
} catch (e) {
    console.log(e);
}

try {
    const booksByState = await getBooksByState('Ny');
    console.log(booksByState);
} catch (e) {
    console.log(e);
}

console.log('   *searchAuthorsByHometown    ');
//searchAuthorsByHometown

try {
    const authorsByHometown = await searchAuthorsByHometown("New York City", "NY");
    console.log(authorsByHometown);
} catch (e) {
    console.log(e);
}

try {
    const authorsByHometown = await searchAuthorsByHometown("NeW York City");
    console.log(authorsByHometown);
} catch (e) {
    console.log(e);
}

console.log('   *getAuthorBooks    ');
//getAuthorBooks

try {
    const authorBooks = await getAuthorBooks('69b3f32f-5690-49d1-b9a6-9d2dd7d6e6cd');
    console.log(authorBooks);
} catch (e) {
    console.log(e);
}

try {
    const authorBooks = await getAuthorBooks(6);
    console.log(authorBooks);
} catch (e) {
    console.log(e);
}

//Books
console.log('   ***Books    ');

console.log('   *getBooks    ');
try {
    const BookData = await getBooks();
    console.log(BookData);
} catch (e) {
    console.log(e);
}

console.log('   *getBookById    ');
//getBookById

try {
    const bookById = await getBookById('99875ad8-a1d3-42ea-8d7b-5ac4cd4edb9e');
    console.log(bookById);
} catch (e) {
    console.log(e);
}

try {
    const bookById = await getBookById('');
    console.log(bookById);
} catch (e) {
    console.log(e);
}

console.log('   *booksByPageCount    ');
//booksByPageCount

try {
    const booksByPageCnt = await booksByPageCount(1000, 1500);
    console.log(booksByPageCnt);
} catch (e) {
    console.log(e);
}

try {
    const booksByPageCnt = await booksByPageCount(0, 0);
    console.log(booksByPageCnt);
} catch (e) {
    console.log(e);
}

console.log('   *sameYear    ');
//sameYear

try {
    const sameYr = await sameYear(1900);
    console.log(sameYr);
} catch (e) {
    console.log(e);
}

try {
    const sameYr = await sameYear(-1000);
    console.log(sameYr);
} catch (e) {
    console.log(e);
}

console.log('   *minMaxPrice    ');
//minMaxPrice

try {
    const minMaxPr = await minMaxPrice();
    console.log(minMaxPr);
} catch (e) {
    console.log(e);
}

console.log('   *searchBooksByPublisher    ');
//searchBooksByPublisher

try {
    const booksByPublisher = await searchBooksByPublisher('Centidel');
    console.log(booksByPublisher);
} catch (e) {
    console.log(e);
}

try {
    const booksByPublisher = await searchBooksByPublisher('Skilit');
    console.log(booksByPublisher);
} catch (e) {
    console.log(e);
}
