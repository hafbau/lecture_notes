obj = {
  cat:   'Mittens',
  dog:   'Bart',
  llama: 'Lucifer'
};

// A: Will this output...

// 1. All the keys
for (let i in obj) {
  console.log(i);
}
// Explanation: When you use a for .. in loop on an object, it loops through the object by the keys

// B: If error, what will the error be? N/A

// C: What would the output be if we switched to for..of instead of for..in ?
// Error
// Explanation: We will get an error, saying that the obj is not iterable. We only use for .. of with iterable data e.g. an array, a string
