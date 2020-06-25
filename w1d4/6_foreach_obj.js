const forEachKeyVal = function(objToLoopOver, callbackFunk) {
  for(const key in objToLoopOver) {
    const value = objToLoopOver[key]
    callbackFunk(key, value)
  }
}
// We used to do the below in loops to prevent a for .. in loop from looping through the prototype chain
// Object.hasOwnProperty(object)

const obj = {
  a: 1,
  b: 'Brad',
  c: 'Carol'
}

const printKeyVal = function(ky, val) {
  console.log(ky, val);
}

forEachKeyVal(obj, printKeyVal)