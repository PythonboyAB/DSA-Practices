// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.

let s = "A man, a plan, a canal: Panama";

function isPalindrome(s) {
  s = s.toLowerCase().replace(/[^a-z0-9]/g, "");
  let i = 0;
  let j = s.length - 1;

  while (i <= j) {
    if (s[i] == s[j]) {
      i++;
      j--;
    } else {
      return false;
    }
  }

  return true;
}

console.log(isPalindrome(s));
