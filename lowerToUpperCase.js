// Given a string s, convert all lowercase English letters (a–z) to uppercase (A–Z) without using any built-in string conversion functions such as:

// toUpperCase()
// toLowerCase()

// You must preserve all other characters (uppercase letters, digits, spaces, and special characters) as they are.

// Example 1

// Input:

// s = "hello"

// Output:

// "HELLO"

function convertUpperCase(s) {
  let result = "";

  for (let ch of s) {
    if (!(ch >= "a" && ch <= "z")) {
      result += ch;
    } else {
      let ascii = ch.charCodeAt() - 32;

      result += String.fromCharCode(ascii);
    }
  }
  return result;
}

console.log(convertUpperCase("hello World from ABhisHek"));
