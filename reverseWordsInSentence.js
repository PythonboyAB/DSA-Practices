let sentence = "A man is looking in the sky";

function reverse(sen) {
  let result = "";
  let word = "";

  for (let i = sen.length - 1; i >= 0; i--) {
    if (sen[i] != " ") {
      word = sen[i] + word; // y , k+y , s+ky
    } else if (word.length > 0) {
      if (result.length > 0) {
        result += " ";
      }
      result += word;
      word = "";
    }
  }
  if (word.length > 0) {
    if (result.length > 0) {
      result += " ";
    }
    result += word;
  }
  console.log(result);
}

reverse(sentence);
