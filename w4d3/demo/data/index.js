const users = require('./users.json');
const axios = require('axios');

exports.getRandomUser = () => users[
  `${Math.floor(Math.random() * Object.keys(users).length)}`
]

const api_key = "0UTRbFtkMxAplrohufYco5IY74U8hOes";
exports.getGif = (q) =>
  axios(`http://api.giphy.com/v1/gifs/search`, {
    params: { q, api_key, rating: "pg-13", tag: "fail" },
  }).then(({ data }) => {
    const res = (data && data.data) || [];
    if (res.length) {
      return res[0].images.original.url;
    }
    return "https://media0.giphy.com/media/mPytjcsG3XS4o/giphy.gif";
  });