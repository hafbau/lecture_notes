const fs = require('fs').promises;

// Problem: Read the data files ** in parallel **
// Sacrificing order and completeness for speed!

// A promise per file
const p1Promise = fs.readFile('data/p1.txt', 'utf8')
const p2Promise = fs.readFile('data/p2.txt', 'utf8')
const p3Promise = fs.readFile('data/p.txt', 'utf8')
const p4Promise = fs.readFile('data/p4.txt', 'utf8')

const allPromises = [
  p1Promise,
  p2Promise,
  p3Promise,
  p4Promise
]

Promise.race(allPromises)
.then(trollResult => {
  console.log('trollResult :>> ', trollResult);
})