const fs = require('fs');

// Problem: Read the data files ** in order **, creating one final string as a result

const finalDoc = [];
// const arrayFiles = ['p1', 'p2']
// const recurseFileRead = (index) => {
//   read(arrayFiles[i])
//   recurseFileRead(index + 1)
// }

// read file p1,
  // do stuff with p1 content
// next read p2
  // do stuff with p1 content
// next read p2
  // do stuff with p1 content

// Call back ladder specs
// next or then function
// to call the next asynch code
// pass in the result of the prev func into the next
// the ladder has to police errors

// myFunk().callAnother().

fs.readFile('data/p1.txt', 'utf8')
.next()

const result = fs.readFile('data/p1.txt', 'utf8', (err, p1) => {
  if (err) {
    // stop 
    return console.log('YIKES. Failed to read p1: ', err);
  }
  finalDoc.push(p1);

  fs.readFile('data/p2.txt', 'utf8', (err, p2) => {
    if (err) {
      // stop 
      return console.log('YIKES. Failed to read p2: ', err);
    }
    finalDoc.push(p2);

    fs.readFile('data/p3.txt', 'utf8')
    .next((err, p3) => {
          if (err) {
            // stop 
            return console.log('YIKES. Failed to read p3: ', err);
          }
          finalDoc.push(p3);

          fs.readFile('data/p4.txt', 'utf8')
        })
      .next((err, p4) => {
        if (err) {
          // stop 
          return console.log('YIKES. Failed to read p4: ', err);
        }
        console.log('p4: ', p4);
        finalDoc.push(p4);
        console.log(finalDoc.join('\n'));
      })
    });
  });
  
});
