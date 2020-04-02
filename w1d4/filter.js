const array = [1, 2, 3, 4]
const isEven = (num) => {
  return num % 2 === 0
}

// if (some == true) {
//   return true
// } else {
//   return false
// }
// filter(array, isEven) //  [2, 4]

// init a empty arr
//loop through input arr
  // call the callback
  // if the return value of cb is true
    // then add it to the new result array
    // else ignore -- noop

// return result

const filter = (arr, filterCondition) => {
  const filtered = [];

  for (const item of arr) {
    const isConditionTrue = filterCondition(item);
    if (isConditionTrue) {
      filtered.push(item)
    }
  }
  return filtered;
}

console.log('filter(array, isEven)', filter(array, isEven))