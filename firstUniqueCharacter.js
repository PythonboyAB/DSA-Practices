// First unique character in string

// Input: s = "leetcode"

// Output: 0

// Explanation:

// The character 'l' at index 0 is the first character that does not occur at any other index.

function findUniCharacter(str) {
  for (let i = 0; i < str.length; i++) {
    let isUnique = true;

    for (let j = 0; j < str.length; j++) {
      if (i !== j && str[i] === str[j]) {
        isUnique = false;
        break;
      }
    }

    if (isUnique) {
      return i;
    }
  }

  return -1;
}

console.log(findUniCharacter("leetcode")); // 0
console.log(findUniCharacter("loveleetcode")); // 2
console.log(findUniCharacter("eetcodet")); // 2
