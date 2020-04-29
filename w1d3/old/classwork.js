// Given a english sentence of words, determine the word density. 
// Find out which words are in the given sentence and how many times each word appears
const quote = "In the beginning the Universe was created This has made a lot of people very angry and been widely regarded as a bad move";

// countWords(quote):
// {
//   in: 1,
//   the: 2,
//   beginning: 1,
//   universe: 1,
//   was: 1,
//   created: 1,
//   this: 1,
//   has: 1,
//   ...
// }

// How to check if key is in object
// e.g const obj = { w: 34, t: 45, f: 56 }; check if key 'someKey' is in obj
// METHOD 1: DO NOT DO THIS
  // get all the keys in the object using Object.keys(obj)
  // then asking if 'someKey' is included in the returned array
  // i.e. Object.keys(obj).includes('someKey');

// METHOD 2: Yess!
  // since 'looking up' a key that does not exist in an object returns 'undefined'
  // i.e obj['someKey'] will be 'undefined'
  // a test if a key exists could be `obj['someKey'] !== undefined`
  // the above will be false in our current case
  // we could simplify this check, if we take advantage of falsiness of 'undefined'
  // i.e `!!obj['someKey']` will be true or false based on if the key/value exists
  // Careful though, what happens if obj['someKey'] is actually zero (0) or false?

// METHOD 3: Yassssss!!!!
  // we could do:
  // 'someKey' in obj
  // e.g. if ('someKey' in obj) { // do cool stuffs }