const cbSync = (cb) => {
  console.log('start');// 1
  cb(1);
}

const fn = (x) => console.log('x is', x) // 2
cbSync(fn)

console.log('all done'); // 3
/**
 * Logs??: 1 2 3
 * 
 */



// ASYNC
const cbAsync = (cb) => {
  console.log('start') // 1
  setTimeout(() => cb(1), 0)
}

cbAsync((x) => console.log('x is', x)) // 2

console.log('all done'); // 3
/**
 * Logs??:
 * 
 */