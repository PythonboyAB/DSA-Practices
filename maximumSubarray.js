// Given an integer array nums, find the subarray with the largest sum, and return its sum.

// Example 1:

// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: The subarray [4,-1,2,1] has the largest sum 6.
// Example 2:

// Input: nums = [1]
// Output: 1
// Explanation: The subarray [1] has the largest sum 1.
// Example 3:

// Input: nums = [5,4,-1,7,8]
// Output: 23
// Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.

// Brute Force Approach o(n2)

// function maxSubarray(arr) {
//   let result = -Infinity;
//   let count = 0;
//   let subarray = [];

//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i; j < arr.length; j++) {
//       subarray.push(arr[j]);
//       count += arr[j];
//       if (count > result) {
//         result = count;
//       }
//     }

//     count = 0;
//   }
//   return result;
// }

// Kadane's Algorithm  o(n)

function maxSubarray(arr) {
  let maxCount = arr[0];
  let count = arr[0];

  for (let i = 1; i < arr.length; i++) {
    count = Math.max(arr[i], count + arr[i]);
    maxCount = Math.max(maxCount, count);

    count = count < 0 ? 0 : count;
  }
  return maxCount;
}

console.log(maxSubarray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maxSubarray([5, 4, -1, 7, 8]));
console.log(maxSubarray([1]));
console.log(maxSubarray([-2, 1]));
