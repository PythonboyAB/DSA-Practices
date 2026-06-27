// Example 1:

// Input: s = "tree"
// Output: "eert"
// Explanation: 'e' appears twice while 'r' and 't' both appear once.
// So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid answer.

// Example 2:

// Input: s = "cccaaa"
// Output: "aaaccc"
// Explanation: Both 'c' and 'a' appear three times, so both "cccaaa" and "aaaccc" are valid answers.
// Note that "cacaca" is incorrect, as the same characters must be together.

// count the frequency
// get the key and store it in array in decending order
//and access the object using the array value and also run loop same numbers of time

function frequencySort(s) {
  // Step 1: Count frequency of each character
  const freq = {};
  for (const char of s) {
    freq[char] = (freq[char] || 0) + 1;
  }

  // Step 2: Get keys and sort by frequency in descending order
  const chars = Object.keys(freq);
  console.log(chars);
  console.log(chars.sort((a, b) => freq[b] - freq[a]));

  // Step 3: Build result by repeating each char frequency times
  let result = "";
  for (const char of chars) {
    result += char.repeat(freq[char]);
  }

  return result;
}

Test;
console.log(frequencySort("tree"));
console.log(frequencySort("cccaaa"));
