const arr1 = [1, 3, 5, 2, 4, 4, 3, 2, 1, 2, 46, 10];
const arr2 = [6, 7, 1, 2, 4, 4, 10, 46];

let intersection = [];

for (i = 0; i < arr1.length; i++) {
  for (j = 0; j < arr2.length; j++) {
    if (arr1[i] === arr2[j]) {
      intersection.push(arr2[j]);
    }
  }
}

const unique = new Set(intersection);
console.log(unique);
