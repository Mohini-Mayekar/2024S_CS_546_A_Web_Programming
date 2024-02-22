/* Todo: Implment the functions below and then export them
      using the ES6 exports syntax. 
      DO NOT CHANGE THE FUNCTION NAMES
*/

import { checkUndefinedOrNull, checkisString, checkisArray, hasSpaces } from './helpers.js';

let swapChars = (string1, string2) => {
  //code goes here
  checkUndefinedOrNull(string1);
  checkUndefinedOrNull(string2);
  checkisString(string1);
  checkisString(string2);

  string1 = string1.trim();
  string2 = string2.trim();
  if (string1.length < 4 || string2.length < 4) throw 'Input strings should have aleast 4 characters.';
  let string1_1 = string1.substring(0, 4);
  let string1_2 = string1.substring(4);
  let string2_1 = string2.substring(0, 4);
  let string2_2 = string2.substring(4);
  return string2_1 + string1_2 + ' ' + string1_1 + string2_2;
};

let longestCommonSubstring = (str1, str2) => {
  //code goes here
  checkUndefinedOrNull(str1);
  checkUndefinedOrNull(str2);
  checkisString(str1);
  checkisString(str2);
  str1 = str1.trim();//.toLowerCase();
  str2 = str2.trim();//.toLowerCase()
  let m = str1.length;
  let n = str2.length;
  let lonCommSubStr = '';
  let p1 = 0;
  let p2 = 0;
  if (m < 5 || n < 5) throw 'Input strings should have aleast 5 characters.';
  for (let i = 0; i < m; i++) {
    p1 = i;
    p2 = 0;
    let commSubStr = '';
    while (p1 < m && p2 < n) {
      let ch1 = str1.charAt(p1);
      let ch2 = str2.charAt(p2);
      //if (commSubStr !== '' && ch1 !== ch2) break;
      if (ch1 === ch2) {
        commSubStr += ch1;
        p1++;
      }
      p2++;
      if (p1 >= m || p2 >= n) break;
    }
    lonCommSubStr = lonCommSubStr.length >= commSubStr.length ? lonCommSubStr : commSubStr;
  }
  return lonCommSubStr;
};

let palindromeOrIsogram = (arrStrings) => {
  //code goes here
  checkUndefinedOrNull(arrStrings);
  checkisArray(arrStrings);

  let m = arrStrings.length;//row length
  if (m < 2) throw 'arrStrings should have atleast 2 elements.';
  arrStrings.forEach(ele => {
    checkisString(ele);
    hasSpaces(ele);
  });
  let resObj = {};
  arrStrings.forEach(ele => {
    let str = ele.trim();
    str = str.replaceAll(/[^a-zA-Z0-9]/g, '');
    checkisString(str);
    hasSpaces(str);
    resObj[ele] = helper(str.toLowerCase());
  });
  return resObj;
};

let helper = (str) => {
  let isPalin = isPalindrome(str);
  let isIso = isIsogram(str);
  if (isPalin && isIso) return "Both";
  else if (isPalin && !isIso) return "Palindrome";
  else if (!isPalin && isIso) return "Isogram";
  else return "Neither"
};

let isPalindrome = (str) => {
  let revStr = Array.from(str).reverse().join('');
  return revStr == str;
};

let isIsogram = (str) => {
  let strArr = Array.from(str);
  let flag = true;
  let map = new Map();
  strArr.forEach(ele => {
    if (map.has(ele)) {
      flag = false;
    } else {
      map.set(ele, 1);
    }
  });
  return flag;
};


export {
  swapChars, longestCommonSubstring, palindromeOrIsogram
} 