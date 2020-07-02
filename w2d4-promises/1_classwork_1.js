const fs = require('fs');

// Problem: Read the data files ** in order **, creating one final string as a result

let finalDoc = '';

fs.readFile('data/p1.txt', 'utf8', (err, p1) => {
    if (err) {
        return console.log('YIKES. Failed to read p1: ', err);
    }
    finalDoc += p1 + '\n'

    fs.readFile('data/p2.txt', 'utf8', (err, p2) => {
        if (err) {
            return console.log('YIKES. Failed to read p2: ', err);
        }
        finalDoc += p2 + '\n'

        fs.readFile('data/p3.txt', 'utf8', (err, p3) => {
            if (err) {
                return console.log('YIKES. Failed to read p3: ', err);
            }
            finalDoc += p3 + '\n'

            fs.readFile('data/p4.txt', 'utf8', (err, p4) => {
                if (err) {
                    return console.log('YIKES. Failed to read p4: ', err);
                }
                finalDoc += p4 + '\n'
                console.log(finalDoc);
            });
        });
    });
});
