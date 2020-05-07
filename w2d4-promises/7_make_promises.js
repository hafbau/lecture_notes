// Creating Promises

// 1. Resolving simple value
// const futureIsBright = new Promise((resolve) => {
//   resolve('all good');
// })

// futureIsBright.then(resolvedValue => {
//   console.log('resolvedValue :>> ', resolvedValue);
// })

// console.log('futureIsBright :>> ', futureIsBright);
// 2. Rejecting simple value
// const futureIsBright = new Promise((resolve, reject) => {
//   reject('bs! its all lies');
// })

// futureIsBright
// .then(resolvedValue => {
//   console.log('resolvedValue :>> ', resolvedValue);
// })
// .catch(err => console.log('err :>> ', err))

// 3. Conditional Resolving / Rejecting simple values
const futureIsBright = new Promise((resolve, reject) => {
  // this only rejects! Once it rejected, it can't later be resolved.
  reject('bs! its all lies');
  resolve("Better believe it!");
})

futureIsBright
  .then(resolvedValue => {
    console.log('resolvedValue :>> ', resolvedValue);
  })
  .catch(err => console.log('err :>> ', err))