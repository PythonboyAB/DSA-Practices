// 1047. Remove All Adjacent Duplicates In String

// Input: s = "abbaca"
// Output: "ca"
// Explanation:
// For example, in "abbaca" we could remove "bb" since the letters are adjacent and equal, and this is the only possible move.  The result of this move is that the string is "aaca", of which only "aa" is possible, so the final string is "ca".

function removeDuplicates(str) {
  const stack = [];

  for (let i = 0; i < str.length; i++) {
    if (stack.length > 0 && stack[stack.length - 1] === str[i]) {
      stack.pop();
    } else {
      stack.push(str[i]);
    }
  }
  return stack.join("");
}

let s = "abbaca";
let t = "azxxzy";
console.log(removeDuplicates(s));
console.log(removeDuplicates(t));
