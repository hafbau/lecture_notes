const person = {
  firstName: 'Martha',
  age: 30
}

const celebrateBirthday = function(p) {
  p.age += 1;
}

console.log('person:', person);

celebrateBirthday(person);

console.log('person:', person);

// What will this program output?

// person: { firstName: 'Martha', age: 30 }

// person: { firstName: 'Martha', age: 31 }