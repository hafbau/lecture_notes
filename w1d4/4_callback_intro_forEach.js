// Function to loop through each item and print out the output
// How is it done with JS arrays

const items = [2, 4, 'hello', 'there'];


const printWord = function(word, secondArg, thirdArg) {
  console.log(word, secondArg, thirdArg)
}

const saveWord = function (word) {
  console.log('saving ... 50%');
  console.log('saving ... 99.9999999%');
  console.log('saving ... 90%');
  console.log('Yaaaas, saved word', word, 'to the cloud! Yes the cloud!!!!');
}
const myFunk = function(item) {
  console.log(item)
}

// items.forEach(myFunk)
items.forEach(printWord)
// items.forEach(saveWord)
// items.forEach(function(item) {
//   console.log(item)
// })