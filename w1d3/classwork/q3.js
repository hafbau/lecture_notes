arr = [2, 4, 5, 6];

for (const x in arr) {
  console.log(x);
}

// What will the output be?
// 0 1 2 3

// Explanation: When you use for .. in on an array, you get back the indexes of the array unlike the actual values that you get when using for .. of.