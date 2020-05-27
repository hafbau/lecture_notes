const hs = {
  name: 'Hafiz sdfgdfg',
  handle: '@hafbau',
  location: 'Calgary',
  greet: function () {
    console.log(`Hello from ${this.name}`);
  }
};

const kv = {
  name: 'Khurram Virani',
  location: 'Vancouver',
  handle: '@kvirani',
  langs: ['Ruby', 'JS', 'Elixir', 'Python'],
  greet: function () {
    console.log(`Hello from ${this.name}`);
  }
};

console.log(hs.greet());
console.log(kv.greet());