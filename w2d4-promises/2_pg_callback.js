// COPY PASTE A STUDENT'S SURVEY SOLUTION
// Mikhail's survey.js
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let name = '';
let activity = '';
let music = '';
let meal = '';
let food = '';
let sport = '';
let superpower = '';

rl.question("What's your name? ", (answer) => {
    name = answer;
    rl.question("What's an activity you like doing? ", (answer) => {
        activity = answer;
        rl.question("What do you listen to while doing that? ", (answer) => {
            music = answer;
            rl.question("Which meal is your favourite (eg: dinner, brunch, etc.)? ", (answer) => {
                meal = answer;
                rl.question("What's your favourite thing to eat for that meal? ", (answer) => {
                    food = answer;
                    rl.question("Which sport is your absolute favourite? ", (answer) => {
                        sport = answer;
                        rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (answer) => {
                          superpower = answer;
                          console.log(`${name} loves listening to ${music} while ${activity}, devouring ${food} for ${meal}, prefers ${sport} over any other sport, and is amazing at ${superpower}.`);
                          rl.close();
                        });
                      });
                });
            });
        });
    });
});