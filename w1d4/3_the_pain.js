// Before we explore callbacks, lets see a problem first

// Start with: Print each to the screen

const names = ['Hafiz', 'Andy', 'Khurram']


const printWord = function(word) {
  console.log(word)
}

const saveWord = function (word) {
  console.log('saving ... 50%');
  console.log('saving ... 99.9999999%');
  console.log('saving ... 90%');
  console.log('Yaaaas, saved word', word, 'to the cloud! Yes the cloud!!!!');
}

const printEach = function(words) {
  for (const word of words) {
    printWord(word)
  }
}

// 1. Loops
// 2. Prints

const saveEach = function(words) {
  for (const word of words) {
    saveWord(word)
  }
}

// 1. Loops
// 2. Saves






























