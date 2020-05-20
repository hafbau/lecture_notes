const express = require('express');
const bodyParser = require('body-parser');
const { getRandomUser, getGif } = require('./data');
const posts = require('./data/posts.json').slice(0, 15);

const app = express();
const port = process.env.PORT || 4337;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));

app.get('/api/posts', (req, res) => {
  console.log('Gettin posts', posts.length);
  res.json(posts);
});

app.post('/api/posts', async (req, res) => {
  const post = req.body;
  if (!post.text) res.status(400).send('No text? Seriously? 🙄')

  post.owner = getRandomUser();
  post.image = await getGif(post.text);

  posts.push(post);
  console.log('new post saved', post);
  res.status(201).send();
});

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
