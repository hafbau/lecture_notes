module.exports = function(db) {
  return {
    findAll: function(table) {
      return db.query(`SELECT * from ${table};`)
      .then(result => result.rows);
    },
    findBy: function(table, key, value) {
      return db.query(`
        SELECT * from ${table}
        WHERE ${key} = '${value}';
      `)
        .then(result => result.rows);
    },
    create: function(table, data) {
      return db.query(`
        INSERT INTO ${table}(${Object.keys(data).join(', ')})
        VALUES ($1, $2)
        RETURNING *;
      `, Object.values(data))
      .then((watevea) => watevea.rows[0]);
    },
    findPostsWithComments: function() {
      return db.query(`
        SELECT * from posts;
      `)
        .then(result => Promise.all(
          result.rows.map(post => db.query(`
            SELECT * from comments WHERE post_id = '${post.id}';
          `)
          .then(({ rows: comments }) => {
            post.comments = comments;
            return post;
          })
        )));
        // .then(result => result.rows);
    },
    findAllPosts: function () {
      return this.findAll('posts')
    },
    findAllComments: function () {
      return this.findAll('comments')
    },
    findCommentsByPost: function(postId) {
      return this.findBy('comments', 'post_id', postId);
    },
    createPost: function(post) {
      return this.create('posts', post);
      // return db.query(`
      //   INSERT INTO posts(title, photo)
      //   VALUES ('${post.title}', '${post.photo}') RETURNING *;
      // `)
      // .then(({ rows }) => rows[0]);
    },
    createComment: function(comment) {
      // this should not work!
      return this.create('comments', comment);
    }
  }
}