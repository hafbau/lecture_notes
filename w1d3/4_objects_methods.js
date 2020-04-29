// this is an object (k->v) pairs
const hs = {
  name: 'Hafiz Suara',
  slack: '@hafbau',
  location: 'Calgary',
  langs: ['JS', 'Ruby', 'Python', 'Java', 'C#', 'VB'],
  greet: function () {// function property K -> a function (methods)
    console.log(`Hello Im ${this.name}`);
  }
};

const greet = function () {
  console.log(`Hello Im ${this.name}`);
}

// Array.push()

const kv = {
  name: 'K V',
  slack: '@kvirani',
  location: 'Vancouver',
};

hs.greet = greet;
kv.greet = greet;

console.log(hs.greet());
console.log(kv.greet());