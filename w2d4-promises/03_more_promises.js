const fs = require('fs')

// convert CALLBACK version reading the files one after the other to PROMISE-IFY version
// Read three files in order

// const p1Promise = new Promise((res, rej) => {
//   fs.readFile('data/p1.txt', 'utf8', (err, data) => {
//     if (err) {
//       rej(err)
//     }
//     // Success, data is reeady
//     res(data);
//   })
// })

// p1Promise
// .then(fileData => console.log('fileData', fileData))

const readFilePromise = function(fileName, enc = 'utf8') {
  return new Promise((res, rej) => {
    fs.readFile(fileName, enc, (err, data) => {
      if (err) {
        rej(err)
      }
      // Success, data is reeady
      res(data);
    })
  })
}

// const p1Promise = readFilePromise('data/p1.txt')
// p1Promise
// .then(fileData => console.log('fileData', fileData))
//
// const babyPromise = new Promise((resolve, reject) => {
//   resolve(5)
//   reject('Bad shit happens')
// })

// // console.log('gaga gugu', babyPromise)

// // babyPromise.then((babyVal) => console.log('babyVal', babyVal))
// // .catch(err => console.log('err', err))

// // console.log('All done');





// Our promisified readFile function
const readFilePromiseUTF8 = function(fileName){
  return new Promise((rslv, rej) => {
    fs.readFile(fileName, 'utf8', (err, file) => {
      if (err) {
        return rej(err)
      }
      // if i'm still pending then resolve
      rslv({ length: file.length, file: file })
    })
  })
}

const allTheFiles = [
  readFilePromiseUTF8('./agile_ladder.js'),
  // Promise.reject('Eror dont explain'),
  readFilePromiseUTF8('./notes.md'),
  readFilePromiseUTF8('./README.md')
]

// readFilePromiseUTF8('data/p1.txt').then(
//   (obj) => console.log('seco', obj.length, obj.file),
//   (er) => console.log('er', er)
// )
// PROMISE.ALL ==> WAITS FOR ALL PROMISES IN AN ARRAY TO BE RESOLVED
// RETURNS A NEW PROMISE THAT RESOLVES TO AN ARRAY WITH ELEMENTS CORRESPONDING TO THE INITIAL PROMISED ELEMENTS (why am I screaming again? I promise to not!)
// const resolvedFiles = Promise.all(allTheFiles);
// console.log('resolvedFiles', resolvedFiles)

// // PROMISE.RACE resolves when any of the promises in an array is resolved
const resolvedFiles = Promise.race(allTheFiles);

resolvedFiles.then((results, secondArg) => {
  console.log('results :', results);
  console.log('secondArg does not get through :', secondArg);
}).catch(err => console.log('err :', err))
// console.log('resolvedFiles :', resolvedFiles);


// // THIS IS SYNCHRONOUS! LOGS Promise: { <pending> }
// // console.log('readFilePromise :', readFilePromise);

// // PROMISE.RESOLVE wraps a value in a promise to be resolved to that value.
// // the below will log 'Gergely'
// // Promise.resolve('Gergely').then((res => console.log('res :', res)))

// // ANOTHER USE CASE OF PROMISE.RESOLVE
// // Scenario: we want to get total length of all the files combined;
// // we could use Array.reduce to take dynamically resolve an array of promises sequentially.
// // readFilePromiseUTF8('file1')
// // .then(() => readFilePromiseUTF8('file2'))
// // .then(() => readFilePromiseUTF8('file2'))
// // .then(() => readFilePromiseUTF8('file2'))

// // Calculate total length of files
// // See how we initialize acc to a Promise resolving to 0 
// allTheFiles.reduce((acc, element) => {
//     let totalLen;
//     return acc
//       .then(len => {
//         totalLen = len;
//         return element
//       })
//       .then(elen => totalLen + elen)
//   },
//   Promise.resolve(0)
// ).then(count => console.log('count :', count))

// // do after all read
// // I do not remember why we wrote this piece
// // const number = cVowels(file)
// // consr x=  'skdjfhkd'

// // function cVowels(str) {
// //   //
// //   return str.length
// // }