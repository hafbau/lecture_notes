/**
 * Object Challenge(Elite) Yeet Speak
 * Implement a simple cipher function which takes in word and
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

// Graham: find a method that already exists

// loop first << Felipe concurs (says loop through the word)
// Hanna: making an array

// if statement to check if letter matches any key in the map


const yeetSpeak = function(word) {
  let convertedWord = '';
  // processing
  for(const letter of word) {
    // if (yeetMap[letter]) { this is buggy since 0 is falsy and a valid value
    // if (yeetMap[letter] !== undefined) {
    if(letter in yeetMap) {
      convertedWord += yeetMap[letter];
    } else {
      convertedWord += letter;
    }
  }

  return convertedWord;
};

const expectation = 'aw3s0m3';
const outcome = yeetSpeak('awesome')// aw3s0m3
console.log('Is test passing? :>> ', expectation === outcome);
console.log('outcome :>> ', outcome);