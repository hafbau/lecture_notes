/**
 * Object Challenge(Elite) Yeet Speak
 * Implement a simple cipher which takes in word and
 * returns a 4337 version of word.
 */
// Given this yeetMap
const yeetMap = {
  y: 4,
  e: 3,
  t: 7,
  l: 1,
  o: 0
}

function yeetSpeak(word) {
  let convertedWord = '';
  for (const letter of word) {
    if (letter in yeetMap) {
      convertedWord += yeetMap[letter];
    } else {
      convertedWord += letter;
    }
  }
  return convertedWord;
}

console.log(yeetSpeak('hello')); // h3110
console.log(yeetSpeak('daniel z'));
console.log(yeetSpeak('mikhail'));
console.log(yeetSpeak('daniel h'));
console.log(yeetSpeak('emily'));
console.log(yeetSpeak('lucas'));
console.log(yeetSpeak('hafiz'));