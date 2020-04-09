// SETUP
// DO NOT CHANGE ANYTHING HERE!
const generateMultipleRandomPromises = (numOfPromisesToGenerate) => {
  if (numOfPromisesToGenerate < 1) return Promise.reject('Bad things! Your fault!!')
  const randomPromises = [];
  for(let i = 0; i < numOfPromisesToGenerate; i++) {
    const randPromise = new Promise((resolve) => {
      setTimeout(() => resolve(i + 1), (i % 2) * 100)
    })
    randomPromises.push(randPromise)
  }
  return randomPromises;
}


/**
 * IMPLEMENT ME:
 * Question 01
 * This function prints the sum of all resolved values of an array of promises
 */
const printSumOfResolvedValues = (arrayOfPromises) => {
  // Your code here
  
}

// test
const manyPromises = generateMultipleRandomPromises(5);
printSumOfResolvedValues(manyPromises); // 15


// STRETCH
/**
 * IMPLEMENT ME:
 * Question 02
 * This function takes two argumenst: 1. an array of promises and 2. a callback
 * And calls the callback with the sum of all resolved values of the array of promises
 */
// Hint: it is an extension of Question 1 above
const calcSumOfResolvedValuesWithCallback = (arrayOfPromises, cb) => {
  // Your code here
  
}

// test
// const manyPromises = generateMultipleRandomPromises(5);
const testCallback = (sum) => console.log('Test passed:', sum === 15)
calcSumOfResolvedValuesWithCallback(manyPromises, testCallback); // Test passed: true