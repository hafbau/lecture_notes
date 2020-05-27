// Example instructors with 3 key pieces of info.

const hs = ['Hafiz Suara', '@hafbau', 'Calgary'];
const kv = ['Khurram Virani', '@kvirani', ['Ruby', 'JS', 'Elixir', 'Python'], 'Vancouver'];

const instructors = [
  hs,
  kv
];

for(const instructor of instructors) {
  const name = instructor[0]
  const handle = instructor[1]
  const location = instructor[2]
  console.log(`${name} lives in ${location} and goes by ${handle}`);
}

// {
//   const name = instructor[0]
//   const handle = instructor[1]
//   const location = instructor[2]
//   console.log(`${name} lives in ${location} and goes by ${handle}`);
// }
// {
//   const name = instructor[0]
//   const handle = instructor[1]
//   const location = instructor[2]
//   console.log(`${name} lives in ${location} and goes by ${handle}`);
// }