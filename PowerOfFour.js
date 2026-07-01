// Given an integer n, return true if it is a power of four. Otherwise, return false.

// An integer n is a power of four, if there exists an integer x such that n == 4x.

// Example 1:

// Input: n = 16
// Output: true
// Example 2:

// Input: n = 5
// Output: false
// Example 3:

// Input: n = 1
// Output: true

function powerOfFour(num) {
  if (num < 1) return false;

  let power = 1;

  while (power < num) {
    console.log((power *= 4));
  }

  return power === num;
}

console.log(powerOfFour(12));
