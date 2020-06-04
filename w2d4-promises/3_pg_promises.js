const readline = require('readline-promise').default;

const rlp = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const answers = [];

const promise1 = rlp.questionAsync('What\'s your name? Nicknames are also acceptable :) ')
// console.log('\npromise1 :>> ', promise1);

promise1
// Promises are Thenable
.then((name) => {
  answers.push(name)
  return rlp.questionAsync('What\'s an activity you like doing? ');
})
.then((activity) => {
  answers.push(activity)
  return rlp.questionAsync('What do you listen to during that activity? ');
})
.then((listen) => {
  answers.push(listen)
  return rlp.questionAsync('Which meal is your favourite (eg: dinner, brunch, etc.) ');
})
.then((meal) => {
  answers.push(meal)
  return rlp.questionAsync('What\'s your favourite thing to eat for that meal? ');
})
.then((food) => {
  answers.push(food)
  return rlp.questionAsync('Which sport is your absolute favourite?) ');
})
.then((food) => {
  answers.push(food)
  return rlp.questionAsync('What is your superpower? ');
})
.then(superpower => {
  answers.push(superpower)
  console.log('anwers :>> ', answers);
  rlp.close(); 
})

// console.log('all done promise');