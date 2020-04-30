// Implement our own forEach
const words = ['hello', 'lighthouse', 'world'];

const printWord = function (word, secondArg) {
  console.log(word, secondArg);
}

const saveWord = function (word) {
  console.log('saving ... 50%');
  console.log('saving ... 99.9999999%');
  console.log('Yaaaas, saved word', word, 'to the cloud! Yes the cloud!!!!');
}


// const forEach = function (words, callback) {
//   for (const word of words) {
//     callback(word)
//   }
// }

// This is how the built in array.forEach method behaves in javascript:
// Together with each item in the array, it also passes the index of the item
// and the original array to the callback function.
// Whether the callback function utilizes it, is up to the callback definition.
const forEach = function (words, callback) {
  for (let i = 0; i < words.length; i++) {
    callback(word, i, words)
  }
}

forEach(words, printWord)

// With a little tweak, we got ourselves forEach that skips even indices
const forEachOddIndex = function (words, callback) {
  for (let i = 1; i < words.length; i += 2) {
    callback(word, i, words)
  }
}
