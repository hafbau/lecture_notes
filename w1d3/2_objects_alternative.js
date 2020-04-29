// Example instructors with 3 key pieces of info.

const hs = ['Hafiz Suara', '@hafbau', 'Calgary', 3, 'LHL'];
const kv = ['Khurram Virani', '@kvirani', 'Vancouver', undefined, 'LHL'];

const instructors = [
  hs,
  kv
];

for (const instructor of instructors) {
  const name = instructor[0];
  const location = instructor[1]
  const slack = instructor[2]
  console.log(`${name} lives in ${location} and goes by ${slack}`)
}