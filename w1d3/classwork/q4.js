const nums = [2, 3, 5, 10];

const items = {
  todo1: 'Buy milk',
  todo2: 'Do yoga',
  todo3: 'Take out garbage',
  todo4: 'Lint my JS',
  todo5: 'Dry clothes'
}

for (const num of nums) {
  console.log(items[`todo${num}`]);
}

// What is the expected output?

// Do yoga
// Take out garbage
// Dry clothes
// undefined

// Explanations:
// The for .. of loop through the nums array has num equalling numbers in the nums array per cycle e.g. 2,then 3, then 5 and lastly 10.
// So, for each cycle the template string in the square brackets (this - `todo${num}`) evaluates to 'todo2', 'todo3', 'todo5' and 'todo10' respectively
// By sustitution then, console.log(items[`todo${num}`]);