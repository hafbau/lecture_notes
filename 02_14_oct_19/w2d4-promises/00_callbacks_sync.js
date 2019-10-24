const cbSync = (cb) => {
  console.log('start');
  cb(1);
}

cbSync((x) => console.log('x is', x))

console.log('all done');
/**
 * Logs:
 * start
 * x is 1
 * all done
 */

const cbAsync = (cb) => {
  console.log('start')
  setTimeout(() => cb(1), 0)
}

cbSync((x) => console.log('x is', x))

console.log('all done');
/**
 * Logs:
 * start
 * all done
 * x is 1
 */