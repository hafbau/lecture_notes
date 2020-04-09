// SOME OF THE CODE HERE ARE NOT SYNTACTICALLY CORRECT, SO RUNNING THIS FILE WILL ERROR
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let variable = '';
rl.question('What\'s your name? Nicknames are also acceptable :) ', (answer) => {
  // TODO: Log the answer in a database
  // console.log(`Thank you for your valuable feedback: ${answer}`),
  variable += "  " + answer;
  rl.question(`Oh sweet ${answer}, What do you listen to while doing that?  `, (err, answer) => {
    // TODO: Log the answer in a database
    variable += " loves listening to " + answer;
    // console.log(`Thank you for your valuable feedback: ${variable}`)
    rl.question('What\'s an activity you like doing?', (err,answer) => {
      // TODO: Log the answer in a database
      variable += " while " + answer;
      // console.log(`Thank you for your valuable feedback: ${variable}`)

      rl.question('What\'s your favourite thing to eat for that meal? ', (answer) => {
        // TODO: Log the answer in a database
        variable += ", devouring " + answer;
        // console.log(`Thank you for your valuable feedback: ${variable}`)
        rl.question('Which meal is your favourite (eg: dinner, brunch, etc.) ', doMeal);

      });

    });

  });
});

// would it not be cool, if we could implement something that handles async better?
