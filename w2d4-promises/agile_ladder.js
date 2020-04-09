// THIS FILE IS NOT A RUNNABLE CODE
const fs = require('fs')

// Call back ladder specs
// next or then function
// to call the next asynch code
// pass in the result of the prev func into the next
// the ladder has to police errors
const finalDoc = ''

fs.readFile('p1')
.then((p1Data) => {
  finalDoc += p1Data;
  return fs.readFile('p2')
})
.catch(e => console.log('Error in p1'))
.then(
  (p2Data) => {
    finalDoc += p2Data;
    return fs.readFile('p3')
  },
  (err) => {
    console.log('bad things in p2');
  }
)
.then((p3Data) => {
  finalDoc += p3Data;
  return fs.readFile('p4')
})
.then((p4Data) => {
  finalDoc += p4Data;
  console.log(finalDoc)
})
.catch((err) => {
  console.log(err)
})

console.log('blah')