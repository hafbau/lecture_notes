// Example instructors with 3 key pieces of info.

const hs = ['Hafiz Suara', '@hafbau', 'Calgary'];
const kv = ['Khurram Virani', '@kvirani', ['JS', 'Ruby', 'Elixir', 'Python'], 'Vancouver'];

const instructors = [
  hs,
  kv
];

for(const instructor of instructors) {
  console.log(`${instructor[0]} lives in ${instructor[2]} with handle ${instructor[1]}`);
}