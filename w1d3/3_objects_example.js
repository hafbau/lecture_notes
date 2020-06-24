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

// for(const instructor of instructors) {
//   console.log(`${instructor.name} lives in ${instructor.location} with handle ${instructor.handle}`);
// }


// for(const instructor of instructors) {
//   const { name, location, handle } = instructor
//   console.log(`${name} lives in ${location} with handle ${handle}`);
// }

// ACCESSING PROPERTIES IN AN OBJECT
const key = 'location'

// console.log('hs.key :>> ', hs.key);
// console.log('hs[key] :>> ', hs[key]);
// console.log('hs[key] :>> ', hs['location']);
// console.log('hs["key"] :>> ', hs["key"]);
// console.log('hs.name :>> ', hs.name);

// console.log('hs["name"] :>> ', hs["name"]);

// SETTING PROP/VAL IN AN OBJECT
console.log('hs :>> ', hs);
hs.key = 'THIS IS LITERALLY K E Y';
hs[key] = 'This leaves us guesing what key???'
hs['location'] = 'Im changing location to nothing sensible'

hs["key"] = 'the last value of the key K E Y'
console.log('hs :>> ', hs);