const arr = [1, 2, 3]

arr.push('hello, bye')

arr[9] = 'kv'

arr[0] = arr[9]

arr[0] = 'abc'

arr[8] = [4, 5, 6]

arr[2] = arr[8]

// [4, 5, 6].push('wowzers')
arr[2].push('wowzers!')

arr[8].push([9000])

// arr[8][0]

console.log('arr :>> ', arr)