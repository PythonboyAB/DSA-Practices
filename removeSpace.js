// Given a string s, remove all spaces from the string without using any built-in string methods such as:

// replace()
// replaceAll()
// split()
// join()
// Regular Expressions

// Return the resulting string.

// Example 1

// Input

// s = "Hello World"

// Output

// "HelloWorld"

function removeSpace(str) {
  let result = "";

  for (let ch of str) {
    if (ch != " ") {
      result += ch;
    }
  }
  return result;
}

console.log(removeSpace("   hell o Wor l d     "));
