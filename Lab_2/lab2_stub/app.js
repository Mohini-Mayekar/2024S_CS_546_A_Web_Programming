/* TODO: Import the functions from your three modules here and write two test cases for each function.. You should have a total of 18 test cases. 
do not forget that you need to create the package.json and add the start command to run app.js as the starting script*/
import { arrayPartition, arrayShift, matrixOne } from './arrayUtils.js'
import { swapChars, longestCommonSubstring, palindromeOrIsogram } from './stringUtils.js'
import { objectStats, nestedObjectsDiff, mergeAndSumValues } from './objectUtils.js'


// console.log(' arrayPartition ');
// const arrayToPartition1 = [1, 2, 3, 4, 5, "apple", "banana", "cherry", "date"];
// const partitionFunc1 = (num) => num % 2 === 0;
// // Expected Result: [[2, 4], [1, 3, 5]]
// try {
//     const partitionedArrays1 = arrayPartition(arrayToPartition1, partitionFunc1);
//     console.log(partitionedArrays1);
// } catch (e) {
//     console.log(e);
// }

// const arrayToPartition2 = [1, 2, 3];
// const partitionFunc2 = 0;

// try {
//     const partitionedArrays2 = arrayPartition(arrayToPartition2, partitionFunc2); // Expected Result: [[2, 4], [1, 3, 5]]
//     console.log(partitionedArrays2);
// } catch (e) {
//     console.log(e);
// }

// console.log(' arrayShift ');

// try {
//     console.log(arrayShift(["Hello", true, 5, "Patrick", "Goodbye"], 4));   // returns [true, 5, "Patrick", "Goodbye", "Hello"]
// } catch (e) {
//     console.log(e);
// }

// try {
//     console.log(arrayShift([7, 11, 15], 3.5)) // throws error
// } catch (e) {
//     console.log(e);
// }

// console.log(' matrixOne ');

// try {
//     console.log(matrixOne([[0, 1, 2, 0], [3, 5, 4, 2], [1, 7, 3, 5]])); //returns [[1,1,1,1],[1,5,4,1],[1,7,3,1]] 
// } catch (e) {
//     console.log(e);
// }

// try {
//     console.log(matrixOne([[0, 1, 2, 0], [3, 5, 4]]));// throws error
// } catch (e) {
//     console.log(e);
// }

// console.log(' swapChars ');

// try {
//     console.log(swapChars("Patrick", "Hill")); //Returns "Hillick Patr"
// } catch (e) {
//     console.log(e);
// }

// try {
//     console.log(swapChars("h", "Hello")); // Throws Error
// } catch (e) {
//     console.log(e);
// }

// console.log(' longestCommonSubstring ');

// try {
//     const str1 = "abcdxyzab";
//     const str2 = "xyzabcd";
//     const commonSubstring = longestCommonSubstring(str1, str2); // Expected Result: "xyzab"
//     console.log(commonSubstring);
// } catch (e) {
//     console.log(e);
// }

// try {
//     const str1_4 = "abcdef";
//     const str2_4 = "1234";
//     const commonSubstring_4 = longestCommonSubstring(str1_4, str2_4); // throws error
//     console.log(commonSubstring_4);
// } catch (e) {
//     console.log(e);
// }

try {
    const commonSubstring_4 = mergeAndSumValues([1, 2, 3]);
    console.log(commonSubstring_4);
} catch (e) {
    console.log(e);
}


// console.log(' palindromeOrIsogram ');

// try {
//     const strings1 = ["abba", "abcd", "Is it OK?", "No lemon, no melon", "a"];
//     const results1 = palindromeOrIsogram(strings1);
//     console.log(results1);
//     //returns and then outputs
//     //{ "abba": "Palindrome", "abcd": "Isogram", "Is it OK?": "Neither", "No lemon, no melon": "Palindrome", "a": "Both" }
// } catch (e) {
//     console.log(e);
// }

// try {
//     const strings2 = ["abba", "  ", "Is it OK?", "No lemon, no melon", "a"];
//     const results2 = palindromeOrIsogram(strings2);
//     console.log(results2);
//     //throws error
// } catch (e) {
//     console.log(e);
// }

// console.log(' objectStats ');

// try {
//     const arrayOfObjects3 = [{ alpha: 3.5, beta: 7.2, gamma: 4.8 }, { x: 0, y: 0, z: 0 }, { p: -2, q: -8, r: -5 }];
//     const statsResult3 = objectStats(arrayOfObjects3);
//     console.log(statsResult3);
//     //Expected Result: { mean: 0.056, median: 0, mode: 0, range: 15.2, minimum: -8, maximum: 7.2, count: 9, sum: 0.5 }
// } catch (e) {
//     console.log(e);
// }

// try {
//     const arrayOfObjects1 = [{ a: 12, b: 8, c: 15, d: 12, e: 10, f: 15 }, 5, { p: -2, q: 0, r: 5, s: 5 }];
//     const statsResult1 = objectStats(arrayOfObjects1);
//     console.log(statsResult1);
//     // throws error
// } catch (e) {
//     console.log(e);
// }

// console.log(' nestedObjectsDiff ');

// try {
//     const obj1 = { key1: "value1", key2: { nestedKey: "nestedValue", arrayKey: [1, 2, 3], arrayKey2: [2, 3], arrayKey3: 33, arrayKey4: [1, 2, 3] }, key4: "res" };
//     const obj2 = { key1: "value1", key2: { nestedKey: "differentValue", arrayKey: [1, 2, 4], arrayKey2: 1, arrayKey3: "33", arrayKey4: [1, 2, 3] }, key3: "newKey" };
//     const differences = nestedObjectsDiff(obj1, obj2);
//     console.log(differences);
//     // Example Output:   { key2: { nestedKey: "differentValue", arrayKey: [1, 2, 4], }, key3: "newKey" }
// } catch (e) {
//     console.log(e);
// }

// try {
//     const obj3 = {};
//     const obj4 = { x: { y: { z: 1 } } };
//     const differences2 = nestedObjectsDiff(obj3, obj4); // throws error
//     console.log(differences2);
// } catch (e) {
//     console.log(e);
// }

// console.log(' mergeAndSumValues ');

// try {
//     const obj7 = { one: 15, two: 20 };
//     const obj8 = { one: 5, two: 10 };
//     const obj9 = { two: 5, three: 8 };
//     const result3 = mergeAndSumValues(obj7, obj8, obj9); // Expected Result: { one: 20, two: 35, three: 8 }
//     console.log(result3);
// } catch (e) {
//     console.log(e);
// }

// try {
//     const obj10 = { a: 1, b: "2", c: 3 };
//     const obj11 = { b: 3, c: 4, d: 5 };
//     const obj12 = { a: 2, c: "hello", e: 6 };
//     const result4 = mergeAndSumValues(obj10, obj11, obj12); // Throws an error
//     console.log(result4);
// } catch (e) {
//     console.log(e);
// }
