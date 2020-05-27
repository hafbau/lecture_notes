const arr = [1, 2, 3, 4, 'hello'];

// console.log('arr[2] :>> ', arr[2]);

arr.push('yo')

// console.log('arr :>> ', arr);

arr.push(4, 'five')


arr[20] = 'al';

arr[0] = arr[7];
// console.log('arr :>> ', arr);

arr[0] = 'abc'

// console.log('arr :>> ', arr);

arr[6] = [9, 8, 7]

arr[1] = arr[6]

arr.length // 21

arr[1].push('you cant see me');
// [9, 8, 7].push('you cant see me');
//22

console.log('arr :>> ', arr);
