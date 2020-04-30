// Before we explore callbacks, lets see a problem first

// Start with: Print each to the screen

const names = ['Hafiz', 'Andy', 'Khurram']

const printWord = function (word) {
  console.log(word);
}

const saveWord = function (word) {
  console.log('saving ... 50%');
  console.log('saving ... 99.9999999%');
  console.log('Yaaaas, saved word', word, 'to the cloud! Yes the cloud!!!!');
}


const printEach = function(words) {
  for (const word of words) {
    printWord(word)
  }
}

const saveEach = function(words) {
  for (const word of words) {
    saveWord(word);
  }
}


// const doEach = function(array) {

// }
// WET => Write Every Time

// 1. Loop through the array
// 2. Logs it to console