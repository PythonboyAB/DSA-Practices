let str = ["h", "e", "l", "l", "o"];

function reverseStr(word) {
  let arr = [];
  let len = word.length - 1;

  for (let i = len; i >= 0; i--) {
    arr.push(word[i]);
  }
  return arr;
}

console.log(reverseStr(str));
