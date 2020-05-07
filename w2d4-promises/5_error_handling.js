// Error in the manifesto!
// Agile Promises
const fs = require('fs').promises;

// Problem: Read the data files ** in order **, creating one final string as a result

const finalDoc = [];

// Promises are one of the objects that are Thenable in javascript
const p1Promise = fs.readFile('data/p1.txt', 'utf8')

p1Promise
  .then((p1) => {
    finalDoc.push(p1);
    return fs.readFile('data/p.txt', 'utf8')
  })
  .then(
    (p2) => {
      finalDoc.push(p2);
      return fs.readFile('data/p3.txt', 'utf8')
    },
    (errWithP2) => {
      console.log('errWithP2', errWithP2)
      // rethrow the error
      throw errWithP2
    }
  )
  .then((p3) => {
    finalDoc.push(p3);
    return fs.readFile('data/p4.txt', 'utf8')
  })
  .then((p4) => {
    finalDoc.push(p4);
    console.log(finalDoc.join("\n"))
  })
  .catch((err) => {
    console.error('Bad things happend but here are the read files', finalDoc)
  })