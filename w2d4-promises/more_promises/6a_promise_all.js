const fs = require('fs').promises;

// Problem: Read the data files ** in parallel **
// Sacrificing order for speed!

// A promise per file
const promiseP1 = fs.readFile('data/p1.txt', 'utf-8')
const promiseP2 = fs.readFile('data/p2.txt', 'utf-8')
const promiseP3 = fs.readFile('data/p32.txt', 'utf-8')
const promiseP4 = fs.readFile('data/p4.txt', 'utf-8')

const allPromises = [
  promiseP1,
  promiseP2,
  promiseP3,
  promiseP4
]

Promise.all(allPromises)
.then(function(resolvedVal) {
  console.log('resolvedVal :>> ', resolvedVal);
})
.catch(err => {
  console.log('err :>> ', err);
})