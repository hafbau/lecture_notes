// Code here may not run.
// This is only here to document how we arrived at our `.then` specifications (also in notes):
//   - should take the return value of the current task and pass it to the next one
//   - will have to be given (pass in) a function to execute next
//   - chainable
//   - should be able to catch errors (we did not get here in class)
//   - should be able to exit finally (we did not get here in class)

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const array = [];
const questions = {
  name: 'Whats your name? Nicknames are also acceptable:) ',
  superpower: 'What is your superpower? In a few words, tell us what you are amazing at!:) ',

}

rl.question('Which sport is your absolute favourite?:) ')
  .then((firstAnswer) => {
    array.push(firstAnswer)
    return rl.question(questions.superpower)
  })
  .then((secondAnswer) => {
    console.log('firstAnswer :', firstAnswer);
  })
  .then((secondAnswer) => {
    console.log('firstAnswer :', firstAnswer);
  })
  .then((secondAnswer) => {
    console.log('firstAnswer :', firstAnswer);
  })
  .then((secondAnswer) => {
    console.log('firstAnswer :', firstAnswer);
  })
  .then((secondAnswer) => {
    console.log('firstAnswer :', firstAnswer);
  })
  .then((secondAnswer) => {
    console.log('firstAnswer :', firstAnswer);
  })
  // Did not get here in class
  .catch((error) => {
    console.log('some bad error :', error);
  })
  .finally(() => {
    rl.close();
  });