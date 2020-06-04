// Agile Promises
const fs = require('fs').promises;

// Problem: Read the data files ** in order **, creating one final string as a result

let finalDoc = '';

const handleError2 = (err) => {
  console.log('Bad things mehn at p2 :>> ', err);
}

const promiseP1 = fs.readFile('data/p1.txt', 'utf-8')

// promiseP1
  .then(function(contentP1) {
    finalDoc += contentP1 + '\n'
    return fs.readFile('data/p23.txt', 'utf8')
  })
  .then(
    function(contentP2) {
      finalDoc += contentP2 + '\n'
      return fs.readFile('data/p3.txt', 'utf8')
    },
    (err) => {
      console.log('Bad things mehn at p2 :>> ', err);
      return fs.readFile('data/p3.txt', 'utf8')
    }
  )
  .then(function(contentP3) {
    finalDoc += contentP3 + '\n'
    return fs.readFile('data/p4.txt', 'utf8')
  })
  .then(function(contentP4) {
    finalDoc += contentP4
    console.log('finalDoc :>> ', finalDoc);
  })
  .catch((error) => {
    console.log('error :>> ', error);
  })
  