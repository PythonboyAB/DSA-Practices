// Reverse the middle string "Word" and keep all thing same " 124323%$#word987*&& "

function reverseMiddleWord(str) {
  let word = "";
  let start = -1;
  let end = -1;

  for (let i = 0; i < str.length; i++) {
    let ch = str[i];
    if ((ch >= "a" && ch <= "z") || (ch >= "A" && ch <= "Z")) {
      if (start === -1) start = i;
      end = i;

      word = ch + word;
    }
  }
  return str.slice(0, start) + word + str.slice(end + 1);
}
console.log(reverseMiddleWord("124323%$#word987*&&"));
