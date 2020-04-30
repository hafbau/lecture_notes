// If functions are values, they can be passed around, can we pass them to functions?

const f = function () {
  return 5;
};

const anotherFunc = function (func) {
  console.log(func())
}

anotherFunc(f)

// The below two are equivalent and the resulted is `func is not a function` error
// anotherFunc(f())
// anotherFunc(5)