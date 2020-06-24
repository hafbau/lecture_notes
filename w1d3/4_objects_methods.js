const hs = {
  name: 'Hafiz sdfgdfg',
  handle: '@hafbau',
  location: 'Calgary',
};

const speakFunk = function() {
  console.log(`Hello from ${this.name}`)
}
const kv = {
  name: 'Khurram Virani',
  location: 'Vancouver',
  handle: '@kvirani',
  langs: ['Ruby', 'JS', 'Elixir', 'Python'],
  // speak: function() {
  //   console.log(`Hello from ${this.name}`)
  // }
};

// a function property is called a method
hs.speak = speakFunk
// console.log(hs.speak())

kv['talk'] = speakFunk
console.log('kv :>> ', kv);
// console.log(kv.talk())