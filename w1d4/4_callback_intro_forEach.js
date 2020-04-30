// Function to loop through each item and print out the output

const items = [2, 4, 'hello', 'there'];




const printWord = function (word) {
  console.log(word);
}

const saveWord = function (word) {
  console.log('saving ... 50%');
  console.log('saving ... 99.9999999%');
  console.log('Yaaaas, saved word', word, 'to the cloud! Yes the cloud!!!!');
}

// there's a JS Array method called forEach
// items.forEach(printWord)
// INLINE CALLBACK
items.forEach(function (word, index, origArrInput) {
  console.log(word, index, origArrInput);
})