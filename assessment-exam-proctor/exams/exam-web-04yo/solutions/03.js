const fs = require('fs');

const sumFileData = function(file1, file2, callback) {

  fs.readFile(file1, 'utf8', (err, data1) => {
    if (err) {
      return callback(err, null);
    }

    const num1 = Number(data1);

    fs.readFile(file2, 'utf8', (err, data2) => {
      if (err) {
        return callback(err, null);
      }

      const num2 = Number(data2);

      callback(null, num1 + num2);
    });
  });
};

// Don't change below:
module.exports = { sumFileData };
