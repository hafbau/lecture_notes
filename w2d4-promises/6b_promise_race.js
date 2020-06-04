const fs = require('fs').promises;

// Problem: Read the data files ** in parallel **
// Sacrificing order and completeness for speed!

// A promise per file
const promiseP1 = fs.readFile('data/p1.txt', 'utf-8')
const promiseP2 = fs.readFile('data/p2.txt', 'utf-8')
const promiseP3 = fs.readFile('data/p3.txt', 'utf-8')
const promiseP4 = fs.readFile('data/p42.txt', 'utf-8')

const allPromises = [
  promiseP1,
  promiseP2,
  promiseP3,
  promiseP4.catch(err => console.log('we caught you'))
]

Promise.race(allPromises)
  .then(function (resolvedVal) {
    console.log('resolvedVal :>> ', resolvedVal);
  })
  .catch(err => {
    console.log('err :>> ', err);
  })