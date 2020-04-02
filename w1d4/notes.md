# Fun with Callbacks

W1D4 with Hafiz Suara

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

## About me [12m]

- Fun fact, I'm hilarious!
- My style
- My accent

## Agenda Today

- Review functions
- More functions
- Life without functions
- HOF / Callbacks
- forEach
- filter / map exercise

## Review functions [32m]

- functions - two phases
  + Definition phase - think when writing the recipe.
  + Execution phase - think when making the food.

  ```js
  // definition
  function makeFood() {
    // instructions to make food - the recipe
  }; // This is NOT edible, please do not eat this!

  // execution
  makeFood(); // actually make the food! This is edible.
  ```

- function parameters and arguments
  + parameters are placeholders / containers for the inputs that a function needs to work. Therefore internal labels used by the function.
  + arguments are actual values being passed to a function in the execution phase.
  + order matters; that's how a function knows what label to put on what value.

  ```js
  // definition
  function makeFoodWith(ingredient, utensil, cleaner, gas) {
    // instructions to make food - the recipe
    // - use utensil to cook ingredient
    // - use cleaner to wash utensil
    // - return food;
  };

  // execution
  makeFoodWith('rice', 'pressurePot', 'soap'); // flip the arguments order at your own risk 🤷‍

  // VERSION 2 With More than three parameters => definition
  function makeFoodWith(optionsObj) {
    // instructions to make food - the recipe
    // - use optionsObj.utensil to cook optionsObj.ingredient
    // - use optionsObj.cleaner to wash optionsObj.utensil
    // - return food;
  };  
  const cookingObj = { ingredient: 'rice', utensil: 'pressurePot', cleaner: 'soap' }
  makeFoodWith(cookingObj); // this cleans things up, especially when needing more arguments
  ```

  > Prefer to use object parameter / argument when you need to pass more than 3 inputs.

- function signature (I/O): this is the answer to two questions; 
  + what (arguments - data types and number of) inputs does the function take and
  + what does it (data type) output.

## More functions [52m]

- function call vs function reference - console.logging experiment

  ```js
  const funk = function () { return 2; };

  // Called
  console.log(funk()); // 2

  // Referenced
  console.log(funk); // [Function: funk]
  console.log('log with text: ', funk); // log with text: function () { return 2; }
  ```

- function declaration vs function expression

- functions as values:
  + what can we do to values in JS?

- functions are first class citizens in Javascript, which means they have these privileges:
  + they can be assigned to a variable
  + they can be passed into another function as argument

  ```js
  const anotherFunk = function(innerFunk) {
    return function() {}
  }

  const justinFunk = function () {}

  another(justinFunk)
  ```

  + they can be returned from another function call

- no-name (anonymous) functions?? When / why might we use those?
  + function expression
  + inline callbacks (examples of this below)
  + Immediately Invoked Function Expression (IIFE) - (do not bother too much about this, yet.)

- arrow functions: they are cool anonymous functions defined without the `function` keyword but with a `fat arrow`. Disclaimer: actually more than just a cool cousin - consequences around context.

```js
const myFunk = () => {
  // do stuff
  return {
    key: 'some val'
  }
}

const myFunkImplicitReturn = () => ({})
```

## Life without functions [57m]

- w.e.t. and not reusable
- does multiple things
- not extensible

Consider the below snippet;

```js
// code that logs 1, 2 and 3 to console
const items = [1, 2, 3];
for (const item of items) {
  console.log(item);
};
```

What two things are we doing here?

What if we wanted to do similar stuff but with a different array of numbers i.e `[4, 6, 8, 10, 5]`
Well, we can write the code above again...:

```js
const anotherItems = [4, 6, 8, 10, 5];
for (const item of anotherItems) {
  console.log(item);
};
```

Nice! What if we want to do this with a hundred different arrays, or a thousand? Would we have to Write it Every Time? That would be so W.E.T! See what I did there :P.

How do we make sure that you Don't Repeat Yourselves - essentially DRYing up our code? You guessed it, FUNCTIONS!

## DRY the W.E.T. logic [67m]

Now that we remember functions, let's make our previous logic reusable

```js
// Before
// code that logs 1, 2 and 3 to console
// Does two things:
// - We are looping through the array, and
// - logging (printing) to console
const items = [1, 2, 3];
for (const item of items) {
  console.log(item);
};

// After - with functions
// Still does two things as before
// But now reusable; we no longer need to write every time if we have multiple arrays
// we can just call the function multiple times
// e.g logEach([1, 2, 3]);
// e.g logEach([4, 8, 10, 5]); and so on.
const logEach = function(items) {
  for (const item of items) {
    console.log(item);
  };
}
```

## Higher Order Function && Callbacks

> When it has multiple responsibilities;
> it is hard to extend.

What if on one occassion we want to log each item (number) in the arrays and on another we want to log the squares or it's product of 10 etc?

Yes we could write a `logEach`, `logEachSquare`, `logProductOfTen` functions. This would be WET as we are rewriting almost exactly the same code - the loop is the same everytime.

How might we solve this? If only we can create a generic function that just loops, create specific functions for each of the different tasks and then somehow pass the specific functions to the generic function. That's a mouthful!

Using the second privilege of being a first class object,the function passed in to another function is a *CALLBACK*. And the function that executes (calls) a callback is the *HIGHER ORDER FUNCTION*


## forEach [72m]

```js
// Higher order function
const forEach = function (items, action) {
  for (const item of items) {
    action(item, items);
  }
}

const numbers = [1, 2, 3]

const logSquare = (number) => console.log(number * number);
// const lSq = function(num) {
//   return console.log(num * num);
// }

forEach(numbers, console.log); // 1, 2, 3, 
forEach(numbers, logSquare); // 1, 4, 9

// built in method on an Array
items.forEach(logSquare)
```

## forEachInReverse [77m]

```js
// We did not implement this in class but here's an idea
const forEachInReverse = function(items, func) {
  for (let i = items.length - 1; i >= 0; i--) {
    func(items[i]);
  }
};

forEachInReverse(['hello', 'Lighthouse Labs', 'and', 'world'], (word) => {
  console.log(word);
});
```

## Group work [92m / 107m]

## Questions [120m]

- closure / currying: when a function is returned from another function. Just a mention for completeness of being first class.

Thank you till next time!