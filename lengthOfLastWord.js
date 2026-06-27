// Example 1:

// Input: s = "Hello World"
// Output: 5
// Explanation: The last word is "World" with length 5.
// Example 2:

// Input: s = "   fly me   to   the moon  "
// Output: 4
// Explanation: The last word is "moon" with length 4.
// Example 3:

// Input: s = "luffy is still joyboy"
// Output: 6
// Explanation: The last word is "joyboy" with length 6.

let lengthOfLastWord = function (s) {
  let word = "";
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] != " ") {
      word += s[i];
    } else if (word.length != 0 && s[i] == " ") {
      return word.length;
    }
  }
  return word.length;
};

console.log(lengthOfLastWord("   fly me   to   the moon  "));
