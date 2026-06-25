// Input: s = "anagram", t = "nagaram"

// Output: true

// Example 2:

// Input: s = "rat", t = "car"

// Output: false

const obj = {};

function isAnagram(str1, str2) {
  if (str1.length != str2.length) return false;

  for (ch of str1) {
    obj[ch] = (obj[ch] || 0) + 1;
  }

  for (ch of str2) {
    if (!obj[ch]) return false;

    obj[ch] = obj[ch] - 1;
  }
  console.log(obj);
  return true;
}

console.log(isAnagram("mango", "ognma"));
