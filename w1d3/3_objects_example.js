const hs = {
  name: 'Hafiz Suara',
  handle: '@hafbau',
  location: 'Calgary'
};

const kv = {
  name: 'Khurram Virani',
  location: 'Vancouver',
  handle: '@kvirani',
  langs: ['Ruby', 'JS', 'Elixir', 'Python'],
};

const instructors = [
  hs,
  kv
];

// for (const { name, location, handle } of instructors) {
//   console.log(`${name} lives in ${location} and goes by ${handle}`);
// }

// for (const instructor of instructors) {
//   console.log(`${instructor.name} lives in ${location} and goes by ${handle}`);
// }

// // accessing the values
hs.name
hs['name']

// setting the values
const key = 'location'
hs.name = 'H S'
hs['name'] = 'The Best, seriously'

hs.key = 'H S'
hs['key'] = 'The Best, seriously'
hs[key] = 'The Best, seriously'

console.log(hs['hobby']);
