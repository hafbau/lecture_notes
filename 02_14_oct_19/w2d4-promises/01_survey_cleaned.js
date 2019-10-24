const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const array = [];

// Attempt 1. to clean this up
// put the questions in an object and refer to them by keys
// similar could also be done with an array but we decided to go with object
const questions = {
  name: 'Whats your name? Nicknames are also acceptable:) ',
  superpower: 'What is your superpower? In a few words, tell us what you are amazing at!:) ',
// the rest that we did not write goes here...
}

// Attempt 2. to clean this up
// Failed attempt to run callbacks sequentially in a loop
// const values = Object.values(questions)
// console.log('values :', values);
// values.forEach(q => {
//   rl.question(q, (answer) => {
//     array.push(answer);
//   })
// })


// Attempt 3. to clean this up
// Refactor the callbacks into functions
// This is good but what if there's a .then?

// Not the best function names but we rolled with it.
const doLast = (answer) => {
  // array.push(answer); // we said no need to push since we can just use it here.
  console.log(`Thank you for your valuable feedback:\nMy name is ${array[0]}.\nI like to play ${array[1]}.\nI listen to ${array[2]}.\nI enjoy eating ${array[3]}.\nMy fav. meal is ${array[4]}.\nI like to play ${array[5]}.\n${answer}.\n`);
  rl.close();
}

const doSportAndLast = (answer) => {
  array.push(answer);
  rl.question(questions.superpower, doLast);
}

const doFavSportAndLast = (answer) => {
  array.push(answer);
  rl.question('Which sport is your absolute favourite?:) ', doSportAndLast);
}

const doMealFavSportAndLast = (answer) => {
  array.push(answer);
  rl.question('Whats your favourite thing to eat for that meal?:) ', doFavSportAndLast);
}

const doListenMealFavSportAndLast = (answer) => {
  array.push(answer);
  rl.question('Which meal is your favourite (eg: dinner, brunch, etc.:) ', doMealFavSportAndLast);
}

const doNameListenMealFavSportAndLast = (answer) => {
  array.push(answer);
  rl.question('What do you listen to while doing that?:) ', doListenMealFavSportAndLast);
}

rl.question(questions.name, doNameListenMealFavSportAndLast);