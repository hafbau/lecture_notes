const cbSync = (cb) => {
  console.log('start');
  cb(1);
}

const fn = (x) => console.log('x is', x)
cbSync(fn)

console.log('all done');
/**
 * Logs??:
 * 
 */

// ASYNC
const cbAsync = (cb) => {
  console.log('start')
  setTimeout(() => cb(1), 0)
}

cbAsync((x) => console.log('x is', x))

console.log('all done');
/**
 * Logs??:
 * 
 */