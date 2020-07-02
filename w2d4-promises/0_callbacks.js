// const cbSync = (cb) => {
//   console.log('start');// 1
//   cb(1);
// }

// const fn = (x) => console.log('x is', x) // 2

// cbSync(fn)

// console.log('all done'); // 3
/**
 * Logs??:
 * 
 */




























// ASYNC
const cbAsync = (cb) => {
  setTimeout(() => cb(1), 0)
  console.log('start') // 1
}

const myFunk = (x) => console.log('x is', x)

cbAsync(myFunk) // 2

console.log('all done'); // 3
/**
 * Logs??:
 * 
 */