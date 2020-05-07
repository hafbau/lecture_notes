const readline = require('readline-promise').default;

const rlp = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const answers = [];

const promise1 = rlp.questionAsync('What do you think of Node.js? ');

const chain = promise1
.then((resolvedP1) => {
  answers.push(resolvedP1);
  return rlp.questionAsync("What's your name? ");
})
.then((somefn) => {
  answers.push(somefn)
  console.log('somefn', somefn)
  return rlp.questionAsync("What's an activity you like doing?");
})
.then((answer3) => {
  console.log('answer3', answer3)
  return 'Lucas wuz ere'
})
.then(result => console.log('result', result))

console.log('all done', chain);