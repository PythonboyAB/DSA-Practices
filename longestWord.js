// Given a string sentence containing words separated by one or more spaces, return the longest word in the sentence.

// If there are multiple words with the same maximum length, return the first one.

// Do not use built-in methods like:

// split()
// Regular Expressions

// You may use loops and string indexing.

// Example 1

// Input

// sentence = "I love programming"

// Output

// "programming"

// create word variable to store word which is seprated by space
// create count variable

function compare(str) {
  let currentWord = "";
  let longestWord = "";

  for (let ch of str) {
    if (ch !== " ") {
      currentWord += ch;
    } else if (longestWord.length < currentWord.length) {
      longestWord = currentWord;
      currentWord = "";
    } else {
      currentWord = "";
    }
  }

  return longestWord.length > currentWord.length ? longestWord : currentWord;
}

console.log(compare("I love JavaScript"));
