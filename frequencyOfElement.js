const nums = [1, 2, 3, 1, 3, 4, 5, 1];

const frequency = nums.reduce((acc, num) => {
  acc[num] = (acc[num] || 0) + 1;
  return acc;
}, {});

const total = nums.reduce((acc, elem) => {
  return acc + elem;
}, 0);

// console.log(total);

console.log(frequency);
