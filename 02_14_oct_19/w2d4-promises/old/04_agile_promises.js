const fs = require('fs').promises;

// Problem: Read the data files ** in order **, creating one final string as a result

const finalDoc = [];

const p1Promise = fs.readFile('data/p1.txt', 'utf8')
  p1Promise.then((p1) => {
      console.log('p1: ', p1);
      finalDoc.push(p1);
      return fs.readFile('data/p2.txt', 'utf8')
    })
    .then((p2) => {
      console.log('p2: ', p2);
      finalDoc.push(p2);
      return fs.readFile('data/p3.txt', 'utf8')
    })
    .then((p3) => {
      console.log('p3: ', p3);
      finalDoc.push(p3);
      return fs.readFile('data/p4.txt', 'utf8')
    })
    .then((p4) => {
      console.log('p4: ', p4);
      finalDoc.push(p4);
      console.log(finalDoc.join("\n"))
      // p1Promise.then(console.log);
    })
  