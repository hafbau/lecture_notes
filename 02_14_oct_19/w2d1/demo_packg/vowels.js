// define a constant variable [a, e, i, o, u]
// define count = 0
// loop through the strInput
  //loop through vowels
    // if vowel matches increment count

  const VOWELS = ['a', 'e', 'i', 'o', 'u']
const countVowels = function(strInput, charsToCheck) {
  let count = 0;
  for (const char of strInput) {
    if (charsToCheck.includes(char)) {
      count += 1
    }
  }
  return count;
};

module.exports = countVowels