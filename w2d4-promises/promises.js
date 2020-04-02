const fs = require('fs')

// CALLBACK version reading the files one after the other
// const cont = fs.readFile('./sink.js', 'utf8', (err, file) => {
//   console.log('file :', file);
//   const number = cVowels(file)
//   fs.readFile('./sink.js', 'utf8', (err, file) => {
//     console.log('file :', file);
//     const number = cVowels(file)
//     fs.readFile('./sink.js', 'utf8', (err, file) => {
//       console.log('file :', file);
//       const number = cVowels(file)
//     })
//   })
// })

// Our promisified readFile function
const readFilePromiseUTF8 = function(fileName){
  return new Promise((rslv, rej) => {
    fs.readFile(fileName, 'utf8', (err, file) => {
      if (err) {
        return rej(err)
      }
      rslv(file.length)
    })
  })
}

const allTheFiles = [
  readFilePromiseUTF8('./sink.js'),
  readFilePromiseUTF8('./review.js'),
  readFilePromiseUTF8('./README.md')
]


// PROMISE.ALL ==> WAITS FOR ALL PROMISES IN AN ARRAY TO BE RESOLVED
// RETURNS A NEW PROMISE THAT RESOLVES TO AN ARRAY WITH ELEMENTS CORRESPONDING TO THE INITIAL PROMISED ELEMENTS (why am I screaming again? I promise to not!)
// const resolvedFiles = Promise.all(allTheFiles);

// PROMISE.RACE resolves when any of the promises in an array is resolved
// const resolvedFiles = Promise.race(allTheFiles);

// resolvedFiles.then((results) => {
//   console.log('results :', results);
// }).catch(err => console.log('err :', err))
// console.log('resolvedFiles :', resolvedFiles);


// THIS IS SYNCHRONOUS! LOGS Promise: { <pending> }
// console.log('readFilePromise :', readFilePromise);

// PROMISE.RESOLVE wraps a value in a promise to be resolved to that value.
// the below will log 'Gergely'
// Promise.resolve('Gergely').then((res => console.log('res :', res)))

// ANOTHER USE CASE OF PROMISE.RESOLVE
// Scenario: we want to get total length of all the files combined;
// we could use Array.reduce to take dynamically resolve an array of promises sequentially.
// readFilePromiseUTF8('file1')
// .then(() => readFilePromiseUTF8('file2'))
// .then(() => readFilePromiseUTF8('file2'))
// .then(() => readFilePromiseUTF8('file2'))

// Calculate total length of files
// See how we initialize acc to a Promise resolving to 0 
allTheFiles.reduce((acc, element) => {
    let totalLen;
    return acc
      .then(len => {
        totalLen = len;
        return element
      })
      .then(elen => totalLen + elen)
  },
  Promise.resolve(0)
).then(count => console.log('count :', count))

// do after all read
// I do not remember why we wrote this piece
// const number = cVowels(file)
// consr x=  'skdjfhkd'

// function cVowels(str) {
//   //
//   return str.length
// }