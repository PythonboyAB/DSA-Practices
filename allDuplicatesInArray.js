// Given an integer array nums of length n where all the integers of nums are in the range [1, n] and each integer appears at most twice, return an array of all the integers that appears twice.

// You must write an algorithm that runs in O(n) time and uses only constant auxiliary space, excluding the space needed to store the output

// Example 1:

// Input: nums = [4,3,2,7,8,2,3,1]
// Output: [2,3]
// Example 2:

// Input: nums = [1,1,2]
// Output: [1]
// Example 3:

// Input: nums = [1]
// Output: []

// function findDuplicates(arr) {
//   const duplicateArr = [];

//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] === arr[j]) {
//         duplicateArr.push(arr[i]);
//       }
//     }
//   }
//   return duplicateArr;
// }
function findDuplicates(arr) {
  const duplicateArr = [];
  const arrCount = {};

  for (num of arr) {
    arrCount[num] = (arrCount[num] || 0) + 1;
  }

  for (num in arrCount) {
    if (arrCount[num] === 2) {
      duplicateArr.push(parseInt(num));
    }
  }
  return duplicateArr;
}
// findDuplicates([4, 3, 2, 7, 8, 2, 3, 1]);

console.log(findDuplicates([4, 3, 2, 7, 8, 2, 3, 1]));
console.log(findDuplicates([1, 1, 2]));
console.log(findDuplicates([1]));
