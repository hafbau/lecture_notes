const request = require('request');

const fetchDataForUser = function(url, username, callback) {
  request(url, (err, response, body) => {
    if (err) {
      return callback(err, null);
    }
    const data = JSON.parse(body);

    callback(null, data.users[username]);
  });
};

// Don't change below:
module.exports = { fetchDataForUser };
