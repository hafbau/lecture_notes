// Overly trivial implementation of .then for the courageous
const makeNotRealPromise = asyncFunk => (...args) => {
  let props = {};

  // wrap the callback based function in the .then
  props.then = function (cb) {
    asyncFunk(...args, (...result) => {
      const value = cb(...result);
      if (value && value.then) props = value;
      else props.value = value;
    })
    return props;
  };
  return props;
}


// Test code
const getUserCb = function (somefn, anodda, callb) {
  setTimeout(() => callb('HAFFIZ'), 0);
}

// Using our magic function to convert a callback based function to promise
// e.g. const fsReadFilePromise = makeNotRealPromise(fs.readFile); // you should have require('fs') first
const getUser = makeNotRealPromise(getUserCb);
getUser()
  .then((data) => {
    console.log('data :', data);
    return getUser();
  })
  .then((dd) => {
    console.log('finished', dd);
  })
