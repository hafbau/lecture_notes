// // Creating Promises
// // 0. Unfulfillable promise
// // const myExecutorFn = function() { return 'my food'; }
// // const uselessPromise = new Promise(myExecutorFn)
// // console.log('uselessPromise :>> ', uselessPromise);
// // 1. Resolving simple value
// // const myExecutorFn = function(resolve) {
// //   resolve('my food is too hot');
// // }

// // const uselessPromise = new Promise(myExecutorFn)
// // console.log('uselessPromise :>> ', uselessPromise);

// // uselessPromise.then(function(resolvedValue) {
// //   console.log(resolvedValue)
// // })
// // 2. Rejecting simple value
// // const myExecutorFn = function(resolve, reject) {
// //   resolve('my food is too hot');
// //   reject('no more springrolls - sorry not sorry');
// // }

// // const uselessPromise = new Promise(myExecutorFn)
// // console.log('uselessPromise :>> ', uselessPromise);

// // uselessPromise
// // .then(function(resolvedValue) {
// //   console.log('resolved here', resolvedValue)
// // })
// // .catch((rejectedValue) => {
// //   console.log('rejectedValue', rejectedValue)
// // })

// // const rest = [1, 3, 4].map(function(num) {
// //   return num * 2
// // }).join('** ')

// // 2b. Wrap in a function?
// const uselessPromiseFn = function(hasSpringRolls) {
//   return new Promise(function(resolve, reject) {
//     if (!hasSpringRolls) {
//       reject('no more springrolls - sorry not sorry');
//     }
//     resolve('my food is too hot');
//   })
// }

// const uselessPromise = uselessPromiseFn(true)
// console.log('uselessPromise :>> ', uselessPromise);

// uselessPromise
// .then(function(resolvedValue) {
//   console.log('resolved here', resolvedValue)
// })
// .catch((rejectedValue) => {
//   console.log('rejectedValue', rejectedValue)
// })


// // 3. Conditional Resolving / Rejecting simple values

function makeUselessPromise(argOne) {
  const myExecutorFn = function(resolve, reject) {
    if (argOne) {
      resolve('my food is too hot');
    }
    reject('no more springrolls - sorry not sorry');
  }

  const uselessPromise = new Promise(myExecutorFn)
  return uselessPromise;
}

const aPromise = makeUselessPromise('sara')

console.log('aPromise :>> ', aPromise);