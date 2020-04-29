const hs = {
  name: 'Hafiz Suara',
  slack: '@hafbau',
  location: 'Calgary',
  langs: ['JS', 'Ruby', 'Python', 'Java', 'C#', 'VB']
};

const kv = {
  name: 'K V',
  slack: '@kvirani',
  location: 'Vancouver',
};

const instructors = [
  hs,
  kv
];

console.log('hs.name :>> ', hs.name);
const varKey = 'slack'
console.log('hs.name :>> ', hs['name']);
console.log('hs.name :>> ', hs[varKey]);
console.log('hs.name :>> ', hs['slack']);

hs.name = 'Mikhail'

for (const instructor of instructors) {
  console.log(`${instructor.name} lives in ${instructor.location} and goes by ${instructor.slack}`)
}