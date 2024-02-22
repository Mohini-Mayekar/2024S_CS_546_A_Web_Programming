export const questionOne = (index) => {
  // Implement question 1 here
  //check if the input is valid
  //fibonacci sequence
  let value = 0;
  if(index < 2){
    value += (index < 1) ? 0 : index;//logic to handle input less than 0 and input value 1
  } else{ // input greater than 1
    value += questionOne(index - 1) + questionOne(index - 2);
  }
  return value; //return result
};

export const questionTwo = (arr) => {
  // Implement question 2 here
  let result = {};
  //check for no input param or empty array
  if(!(arr === undefined) && arr.length > 0){
    //iterating over the array
    arr.forEach(ele => {
      result[ele] = isPrime(ele);
    });    
  }
  return result; //return result
};

//check if number is prime
function isPrime(num){
  let isPrime = true;
  if(num < 2) isPrime = false;
  for(let i = 2; i < num; i++){
    //if the current number is divisible by any number other than itself(as i is initiated from 2) set isPrime to false
    if(num % i === 0){
      isPrime = false;
      break;
    }
  }
  return isPrime;
}

export const questionThree = (str) => {
  // Implement question 3 here
  var resObj = {consonants: 0, vowels: 0, numbers: 0, spaces: 0, punctuation: 0, specialCharacters: 0};
  const punctuationSet = new Set(['.','"',':',';','!','?','{','}','-','[',']',',','(',')',"'",'—']);
  if(str.length > 0){
    for(let i = 0; i < str.length; i++){
      let currChar = str.charAt(i);
      //alphabets
      if((currChar >= "a" && currChar <= "z") || (currChar >= "A" && currChar <= "Z")){
        currChar = currChar.toLowerCase();
        //vowels
        if(currChar == "a" || currChar == "e" || currChar == "i" || currChar == "o" || currChar == "u"){
          resObj['vowels']++;
        } else { //consonants
          resObj['consonants']++;
        }
      } //numbers 
      else if(currChar >= "0" && currChar <= "9"){
        resObj['numbers']++;
      } //spaces
      else if(currChar == " "){
        resObj['spaces']++;
      } //punctuation
      else if (punctuationSet.has(currChar)){
        resObj['punctuation']++;
      } //specialCharacters
      else {
        resObj['specialCharacters']++;
      }
    }
  }
  return resObj; //return result
};

export const questionFour = (arr) => {
  // Implement question 4 here
  let resArr = [];
  //check for empty array
  if(arr.length > 0){
    arr.forEach(ele => {
      if(!resArr.includes(ele)){
        resArr.push(ele);
      }
    });    
  }
  //resArr = arr.filter((val,idx) => arr.indexOf(val) === idx);
  //console.log(arr);
  return resArr; //return result
};

//DO NOT FORGET TO UPDATE THE INFORMATION BELOW OR IT WILL BE -2 POINTS PER FIELD THAT IS MISSING.
export const studentInfo = {
  firstName: 'Mohini',
  lastName: 'Mayekar',
  studentId: '20026014'
};
