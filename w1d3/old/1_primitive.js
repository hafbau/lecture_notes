// null
// undefined
// String
// Number
// Boolean
// Symbol


// Immutable
// let num = 5

// num = 8

let string = 'changeable?'
string[2] = 'FA'


function changechar(string) {
  string = 'hjdsjhdsjhsd'//string.replace('a', 'eh?')
  console.log('string', string)
}

changechar(string)
console.log('string', string)