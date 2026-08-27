function checkLetter(ch) {
  switch (ch) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
      return "Vowel";
    default:
      return "Consonant";
  }
}

console.log(checkLetter("a")); // "Vowel"
console.log(checkLetter("b"));