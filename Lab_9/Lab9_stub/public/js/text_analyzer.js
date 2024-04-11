/*
Using JavaScript in your browser only, you will listen for the form's submit event; when the form is submitted, you will:

Get the value of the input text element.  
You will take in the text input , convert it to all lowercase and generate some text statistics based on the input.
You will calculate the following statistics based on the text:
Original Input: you will just show the input that the user entered (see below)
Total Number Letters: total number of letter characters in the text ,
Total Number of Non-Letters: total number of non-letters in the text (including spaces),
Total Number of Vowels: total number of vowels in the text (not counting y),
Total Number of Consonants: total number of consonants in the text (counting y),
Total Number of Words: total number of words in the text; a word is defined as any sequence of letters broken by any not-letter. For example, the phrase to-do is two words; a word does not start until a letter appears,
Total Number of Unique Words: total number of unique words that appear in the lowercased text, if a word appears multiple times in the text, you count one occurrence of the word as a unique word.
Total Number of Long Words: number of words in the text that are 6 or more letters long; this is a total count of individual words, not unique words,
Total Number of Short Words: number of words in the text that are 3 or less letters long; this is a total count of individual words, not unique words
This lab is easy to over-complicate by attempting to be too clever. I am giving two important pieces of advice:

You will generate the following HTML every time the application processes the text and append it to the text_output div.  
You will be using a data list element (dl), inside the dl, you will have a data title (dt) that has the title of the stat and then a data description (dd) which has the value. (see expected output below)

Here is the output based on the input: "Helllo, my -! This is a great day to say helllo.   Helllo! 2 3 4 23"
<dl>

  <dt>Original Input:</dt>

  <dd>Helllo, my -! This is a great day to say helllo.   Helllo! 2 3 4 23</dd>

  <dt>Total Number Of Letters</dt>

  <dd>40</dd>

  <dt>Total Number of Non-Letters</dt>

  <dd>27</dd>

  <dt>Total Number of Vowels</dt>

  <dd>14</dd>

  <dt>Total Number of Consonants</dt>

  <dd>26</dd>

  <dt>Total Number of Words</dt>

  <dd>11</dd>

  <dt>Total Number of Unique Words</dt>

  <dd>9</dd>

  <dt>Total Number of Long Words</dt>

  <dd>3</dd>

  <dt>Total Number of Short Words</dt>

  <dd>6</dd>

</dl>
You will generate the above HTML and append it to the div every time the form is submitted, so you will have multiple data lists (dl) in the div, one for each time the user inputs and processes some text. So for example:

If the user submitted the following input and processed it:

1. "Helllo, my -! This is a great day to say helllo.   Helllo! 2 3 4 23"

2. "The quick brown fox jumps over the lazy dog."

3.  "Helllo, my -! This is a great day to say helllo.   Helllo! 2 3 4 23"

Your div would look like this:

<div id="text_output">

  <dl>

    <dt>Original Input:</dt>

    <dd>Helllo, my -! This is a great day to say helllo.   Helllo! 2 3 4 23</dd>

    <dt>Total Number of Letters</dt>

    <dd>40</dd>

    <dt>Total Number of Non-Letters</dt>

    <dd>27</dd>

    <dt>Total Number of Vowels</dt>

    <dd>14</dd>

    <dt>Total Number of Consonants</dt>

    <dd>26</dd>

    <dt>Total Number of Words</dt>

    <dd>11</dd>

    <dt>Total Number of Unique Words</dt>

    <dd>9</dd>

    <dt>Total Number of Long Words</dt>

    <dd>3</dd>

    <dt>Total Number of Short Words</dt>

    <dd>6</dd>

  </dl>

  <dl>

    <dt>Original Input:</dt>

    <dd>The quick brown fox jumps over the lazy dog.</dd>

    <dt>Total Number of Letters</dt>

    <dd>35</dd>

    <dt>Total Number of Non-Letters</dt>

    <dd>9</dd>

    <dt>Total Number of Vowels</dt>

    <dd>11</dd>

    <dt>Total Number of Consonants</dt>

    <dd>24</dd>

    <dt>Total Number of Words</dt>

    <dd>9</dd>

    <dt>Total Number of Unique Words</dt>

    <dd>8</dd>

    <dt>Total Number of Long Words</dt>

    <dd>0</dd>

    <dt>Total Number of Short Words</dt>

    <dd>4</dd>

  </dl>

  <dl>

    <dt>Original Input:</dt>

    <dd>Helllo, my -! This is a great day to say helllo.   Helllo! 2 3 4 23</dd>

    <dt>Total Number of Letters</dt>

    <dd>40</dd>

    <dt>Total Number of Non-Letters</dt>

    <dd>27</dd>

    <dt>Total Number of Vowels</dt>

    <dd>14</dd>

    <dt>Total Number of Consonants</dt>

    <dd>26</dd>

    <dt>Total Number of Words</dt>

    <dd>11</dd>

    <dt>Total Number of Unique Words</dt>

    <dd>9</dd>

    <dt>Total Number of Long Words</dt>

    <dd>3</dd>

    <dt>Total Number of Short Words</dt>

    <dd>6</dd>

  </dl>

</div>
If the user does not have a value for the input when they submit, you should not continue processing and instead should inform them of the error on the page. If the user enters bad data, you should not continue processing and instead inform them of the error on the page.

The form should reset itself every time after an input has been processed.
*/


(function () {

  const form = document.getElementById("text_form");
  const outputDiv = document.getElementById("text_output");
  const errorDiv = document.getElementById("error");

  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      const originalUserInput = document.getElementById("text_to_analyze").value.trim();
      errorDiv.classList.add('hidden');
      // resultContainer.classList.add('hidden');
      errorDiv.textContent = "";
      if (originalUserInput.length === 0) {
        errorDiv.classList.remove('hidden');
        errorDiv.textContent = "Please enter valid text. Empty spaces are not valid text.";
        //errorDiv.append("Please enter some text.");
        form.reset();
        return;
      }
      const userInput = originalUserInput.toLowerCase();

      // const letters = userInput.replace(/[^a-z]/g, "").length;
      // const nonLetters = userInput.replace(/[a-z]/g, "").length;
      // const vowels = userInput.replace(/[^aeiou]/g, "").length;
      // const consonants = userInput.replace(/[^bcdfghjklmnpqrstvwxyz]/g, "").length;
      // const words = userInput.split(/\W+/).filter(Boolean).length;
      // const uniqueWords = new Set(userInput.split(/\W+/).filter(Boolean)).size;
      // const longWords = userInput.split(/\W+/).filter(word => word.length >= 6).length;
      // const shortWords = userInput.split(/\W+/).filter(word => word.length <= 3).length;


      const inputLen = userInput.length;
      const letters = getTotalNumberLetters(userInput);
      const nonLetters = inputLen - letters;
      const vowels = getTotalNumberVowels(userInput);
      const consonants = letters - vowels;
      const words = getTotalNumberWords(userInput).length;
      console.log(userInput.split(/\W+/));
      console.log(userInput.split(/\W+/).filter(Boolean));
      const uniqueWords = getTotalNumberUniqueWords(words);
      const longWords = getTotalNumberLongWords(words);
      const shortWords = getTotalNumberShortWords(words);

      const newDl = document.createElement('dl');
      newDl.innerHTML = `              
                  <dt>Original Input:</dt>
                  <dd>${originalUserInput}</dd>
                  <dt>Total Number of Letters</dt>
                  <dd>${letters}</dd>
                  <dt>Total Number of Non-Letters</dt>
                  <dd>${nonLetters}</dd>
                  <dt>Total Number of Vowels</dt>
                  <dd>${vowels}</dd>
                  <dt>Total Number of Consonants</dt>
                  <dd>${consonants}</dd>
                  <dt>Total Number of Words</dt>
                  <dd>${words}</dd>
                  <dt>Total Number of Unique Words</dt>
                  <dd>${uniqueWords}</dd>
                  <dt>Total Number of Long Words</dt>
                  <dd>${longWords}</dd>
                  <dt>Total Number of Short Words</dt>
                  <dd>${shortWords}</dd>
          `;
      outputDiv.appendChild(newDl);
      form.reset();
    });
  }

  const getTotalNumberLetters = (userInput) => {
    //replacing all char in the string except for alphabets (a-z) with an empty string and returning the length of the resultant string
    return userInput.replace(/[^a-z]/g, "").length;
  };

  const getTotalNumberVowels = (userInput) => {
    //replacing all char in the string except for vowels with an empty string and returning the length of the resultant string
    return userInput.replace(/[^aeiou]/g, "").length;
  };

  const getTotalNumberWords = (userInput) => {
    //splitting the input string at all non-alpha-numeric char, filtering on the array to remove any empty strings as one of the elements in the array and return the filtered array
    return userInput.split(/\W+/).filter(Boolean);
  };

  const getTotalNumberUniqueWords = (words) => {
    //Array of all words in the user input as an input to this function. Create set(unique elements) from this input array and return the size of the set
    return new Set(words).size;
  };

  const getTotalNumberLongWords = (words) => {
    //Array of all words in the user input as an input to this function. Filter array where word length is >= 6. Return the length of the resultant array
    return words.filter(word => word.length >= 6).length;
  };

  const getTotalNumberShortWords = (words) => {
    //Array of all words in the user input as an input to this function. Filter array where word length is <= 3. Return the length of the resultant array
    return words.filter(word => word.length <= 3).length;
  };

})();