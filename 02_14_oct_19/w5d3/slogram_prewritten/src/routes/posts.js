const postRoutes = require('express').Router();

module.exports = function (dataHelpers) {
  postRoutes.get('/', (req, res) => {
    dataHelpers.findPostsWithComments().then(posts => {
      res.json(posts)
    })
  });

  postRoutes.post('/', (req, res) => {
    const post = req.body;
    dataHelpers.createPost(post)
    .then(createdPost => res.json(createdPost))
    .catch(err => {
      console.error('err in create post :', err);
      res.status(400).send(err);
    })
  })

  return postRoutes;
}