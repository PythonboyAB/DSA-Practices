let sentence = "1 man $&@# is waling on ro*ad 123";

function identifier(sen) {
  let vowels = 0;
  let digits = 0;
  let specialCharacters = 0;
  for (let i = 0; i < sen.length; i++) {
    let ch = sen[i];

    if ((ch >= "A" && ch <= "Z") || (ch >= "a" && ch <= "z")) {
      ch = ch.toLowerCase();

      if (ch == "a" || ch == "e" || ch == "i" || ch == "o" || ch == "u") {
        vowels++;
      }
    } else if (ch >= "0" && ch <= "9") {
      digits++;
    } else if (ch == " ") {
      continue;
    } else {
      specialCharacters++;
    }
  }
  console.log(`vowels are: ${vowels}`);
  console.log(`Digits are: ${digits}`);
  console.log(`special Characters are: ${specialCharacters}`);
}

identifier(sentence);
