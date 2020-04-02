// const items = [1, 2, 3];
// console.log('funk',
//   function noahTalks (items) {
//     for (const item of items) {
//       console.log(item);
//     }
// })

// function hafizSaysNoahTalks(items) {
//   for (const item of items) {
//     console.log(item);
//   }
//   return 'somefn'
// }

// const hafizSaysNoahTalks = (items) => {
//   for (const item of items) {
//     console.log(item);
//   }
//   return 'somefn'
// }
// const myFunk = () => console.log('wait...')
// myFunk()
// can be rewritten as:

// (function (items) {
//   for (const item of items) {
//     console.log(item);
//   }
// })();

// but if we want something more abstract and single-purpose

// const forEach = function (items, action) {
//   for (const item of items) {
//     action(item);
//   }
// };

// declaredFunk = 'not a funk'