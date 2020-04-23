const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 4337;
const users = require('./data/users.json');
const posts = require('./data/posts.json');
// bodyParser.json()
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));

app.get('/api/posts', (req, res) => {
  console.log('Gettin posts', posts.length);
  res.json(posts);
});

app.post('/api/posts', (req, res) => {
  const post = req.body;
  post.user = users[post.userId]
  posts.push(post);
  console.log('new post saved', post);
  res.status(201).send(post);
});

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
