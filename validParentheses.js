// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

// Example 1:

// Input: s = "()"

// Output: true

// Example 2:

// Input: s = "()[]{}"

// Output: true

var isValid = function (s) {
  let stack = [];

  for (ch of s) {
    if (ch === "(" || ch === "[" || ch === "{") {
      stack.push(ch);
    } else {
      let top = stack.pop();
      if (ch === ")" && top !== "(") return false;
      if (ch === "]" && top !== "[") return false;
      if (ch === "}" && top !== "{") return false;
    }
  }

  return stack.length === 0;
};

console.log(isValid("(}"));
