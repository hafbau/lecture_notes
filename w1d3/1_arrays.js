const arr = [1, 2, 3, 'hello']

// console.log('arr[2] :>> ', arr[2]);

arr.push('yo peeps')

// console.log('arr :>> ', arr);

arr[9] = 'daniel z'

// console.log('arr :>> ', arr[8]); 

arr[0] = arr[9]

arr[0] = 'lucas'

// console.log('arr :>> ', arr);

arr[8] = [2, 3, 4]

arr[1] = arr[8]

// console.log('arr :>> ', arr);

arr[8].push(5);
// [2, 3, 4].push(5)
console.log('arr :>> ', arr);