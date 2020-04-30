## About You [5m]

- Why?
  + why are we here
  + why are coding without
- Don't violate your brain
- Appreciate your wins
- Communicate

## About the bootcamp [10m]

- It's methodical
- It's a lot and little time
- It's about the process

What is software
- Data
- Behaviour

## Object Challenge (Elite) Leet Speak
Implement a simple cipher which takes in word and returns a 1337 version of word.

h => 4
e => 3
t => 7
l => 1
o => 0

EDD

## functions as value
- creates greet function that takes `name` variable
- consolelog the variable vs consoleloging the function call
- assign it into another variable
- show that it points to the same function using python tutor
- we just treated function as a value
- functions are `first class citizens in JS`

## function passed into functions

```js
// If functions are values, they can be passed around, can we pass them to functions?

const f = function () {
  return 5;
};

const anotherFunc = function(func) {
  console.log(func)
}

// What will this print
anotherFunc(f);

// then this?
anotherFunc(f());
```
- Realized we can also pass functions into other functions

## The problem callback solves

```js
// Before we explore callbacks, lets see a problem first

// Start with: Print each to the screen

const names = ['Hafiz', 'Andy', 'Khurram']

// Define printEach
const printEach = function(words) {
  for (const word of words) {
    console.log(word)
  }
}

/// How many things does this function do
// 1. Loop
// 2. Print

// So perhaps change the name to loopAndPrintEach ?

```

- factor out the printWord and call it in place of console.log
- Problem solved? No; that function is still doing two things indirectly.

- For example what if we want to saveWord?

- The function is still coupled, hard to extend

## Callback Intro

```js
// Function to loop through each item and print out the output

const items = [2, 4, 'hello', 'there'];

// there's a JS Array method called forEach
items.forEach(function(item) {
  console.log('item', item);
});

// show non-inline approach as well
items.forEach(printWord);

// In the example above; printWord is called four times by the forEach method
```

## forEachInReverse

```js
// Implement our own forEach but backwards
const words = ['hello', 'lighthouse', 'world'];

// Implement printEachBackwards without the callback first
// - this is not where we want to be;
// - it's coupled and does multiple things

// Refactor the console.log into printWord
// - still not there, because it's not passed in. So still coupled; we would need to keep this function printWord in here

// Finish it off; pass it as callbacks
```

## Things we learned

- Approach: Importance of properly naming things.
- Approach: Importance of knowing how to reading code
- Approach: Incremental approach (EDD)
  - Error Driven Development (KV's baby)
- Functions are first class citizens in JS
  - They can be treated as values and passed around
- This allows us to create more powerful 'generic' functions like forEach, filter, map or reduce
