// For example:

// "abbaca" → "abc"
// "programming" → "progamin"

function removeDuplicate(str) {
  let result = "";
  let found = false;

  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < result.length; j++) {
      if (result[j] == str[i]) {
        found = true;
        break;
      }
    }
    if (!found) {
      result += str[i];
    }
    found = false;
  }
  return result;
}
let s = "abbaca";
let t = "programming";
console.log(removeDuplicate(s));
console.log(removeDuplicate(t));
