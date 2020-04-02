const commentRoutes = require('express').Router();

module.exports = function (dataHelpers) {
  commentRoutes.get('/', (req, res) => {
    const postId = req.query.postId;
    let query;// let query = Promise.resolve();
    if (postId) {
      query = dataHelpers.findCommentsByPost(postId);
    } else {
      query = dataHelpers.findAllComments();
    }
    query.then(comments => res.json(comments))
  })

  return commentRoutes;
}