# Fun with Callbacks
Hey crew! Welcome again to LHL! It's been four days already. Thanks for your attention and engagement today, I'll expect more :)

Please leave your feedback -  thanks ;)

## Agenda Today

- [x] Review Object / functions: Challenge
- [x] Functions as values
- [x] Callbacks
- [x] forEachInReverse exercise
- [x] map

## Things we learned summary in our words

- forEach helps us abstract away the repeatable looping logic
- Higher order functions are functions that takes in other functions as arguments
- We can use inline callbacks especially if it's a one-time use case; otherwise it's better to define the callback function separately
- Functions are first class citizens and can be treated as any other values in javascript
- const / let are block scoped and are not hoisted
- Callback functions caan have any number of arguments for example forEach passes in the index of the current item and the original array

## Code

[Code we worked on are here.](https://github.com/hafbau/lecture_notes/tree/master/w1d4)

The two classworks are in `0_object_challenge.js` and the `breakout/` folder.

The forEachInReverse breakout question is also here:
[forEachInReverse](https://gist.github.com/hafbau/895ce779fd3b74d51941159a7bf341ae)


## Video

[Video will be here once upload is finished](#)


## Notes

Here's my previous note, tweaked a bit to today, I hope you like it.

### Life here at the bootcamp

- Be aware when you're being stressed out
- Not having the full conceptual picture can feel inundating
- Sometimes take a step back to ask yourself why. E.g Why am I doing this to myself? Why am I writing this line of code? Why this bug? Why am I coding without coffee or beer?
-  Talk to mentors when you can't answer any of the whys (maybe not the coffee/beer one 🤷‍)

### Review of F.O.C.A.L || COALF?

*Conditionals* - we talked about the patterns I've observed in the past days:

- Use equality operator `===` instead of assignment operator `=`
- Prefer something like `if (hungry) {` to `if (hungry === true) {` when all you want is a truthiness check
- Return within an `if` statement, make sure you know that you're returning out of the function.

*Objects* - we talked about objects creation, storing values and accessing values.

- `{}` vs `new Object` no surface difference but if you're curious and adventurous check <a href="https://stackoverflow.com/a/13874088/5039404">this SO answer out.</a>
- Storing and accessing:

```js
// Objects
// - storage
const food = {};
food.name = 'Nigerian Jollof Rice';
food['isTasty'] = true;

// - access
food.isTasty; // true
food['name']; // Nigerian Jollof Rice
```

*Arrays* - reviewed how they are different from objects. They are index based.

*Loops* - reviewed at `for`, `for of` and `for in` loops.

*Side Note* - How to read MDN.

### Life without functions
- does multiple things
- w.e.t. and not reusable
- not extensible

Consider the below snippet;

```js
// code that logs 1, 2 and 3 to console
const items = [1, 2, 3];
for (const item of items) {
  console.log(item);
};
```

- We are looping through the array, and
- logging (printing) to console

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

### Function refresher
- functions and variables similarities - two phases
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
  function makeFoodWith(ingredient, utensil, cleaner) {
    // instructions to make food - the recipe
    // - use utensil to cook ingredient options.u
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
  makeFoodWith({ ingredient: 'rice', utensil: 'pressurePot', cleaner: 'soap' }); // this cleans things up, especially when needing more arguments
  ```

  > Prefer to use object parameter / argument when you need to pass more than 3 inputs.

- function signature (I/O): this is the answer to two questions; what (arguments - data types and number of) inputs does the function take and what does it (data type) output.

### More functions

- no-name (anonymous) functions?? When / why might we use those?
  + function expression
  + inline callbacks (examples of this below)
  + Immediately Invoked Function Expression (IIFE) - (do not bother too much about this, yet.)
- arrow functions: they are cool anonymous functions defined without the `function` keyword but with a `fat arrow`
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
  + complete hoisting happens for declaration
  + hoisting makes it possible to call (execute) a function before it's been declared

  ```js
  // Hoisted
  declaredFunk(); // called before being defined, works!

  function declaredFunk() {
    console.log('Im declared');
  }

  // Not completely hoisted
  expressedFunk(); // TypeError: expressedFunk is not a function

  var expressedFunk = function () {
    console.log('Im expressed');
  }
  ```

- functions as values:
  + basically function expression
- functions are first class citizens in Javascript, which means they have these privileges:
  + they can be assigned to a variable
  + they can be passed into another function as argument
  + they can be returned from another function call

### DRY the W.E.T. logic

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

> When it has multiple responsibilities;
> it is hard to extend.

What if on one occassion we want to log each item (number) in the arrays and on another we want to log the squares or it's product of 10 etc?

Yes we could write a `logEach`, `logEachSquare`, `logProductOfTen` functions. This would be WET as we are rewriting almost exactly the same code - the loop is the same everytime.

How might we solve this? If only we can create a generic function that just loops, create specific functions for each of the different tasks and then somehow pass the specific functions to the generic function. That's a mouthful!

Using the second privilege of being a first class object,the function passed in to another function is a *CALLBACK*. And the function that executes (calls) a callback is the *HIGHER ORDER FUNCTION*


### forEach

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

### forEachInReverse

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

- closure / currying: when a function is returned from another function. Just a mention for completeness of being first class.

Thank you till next time!