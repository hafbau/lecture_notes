const https = require("https");
const BASE_URL = "https://jsonplaceholder.typicode.com";
const getPromiseJsonPlaceholder = (path) => new Promise((resolve, reject) => {
  https.get(BASE_URL + path, res => {
    res.setEncoding("utf8");
    let body = "";
    res.on("data", data => {
      body += data;
    });
    res.on("end", () => {
      body = JSON.parse(body);
      resolve(body);
    });
    res.on("error", err => reject(err));
  });
});

module.exports = function(db) {
  // clears the db of existing data
  return db.query(`
    DELETE from comments;
    DELETE from posts;
  `)
  .then(() => getPromiseJsonPlaceholder("/posts"))
  .then(posts => {
    return Promise.all(
      posts.map(post => db.query(`
        INSERT INTO posts(id, title, photo)
        VALUES('${post.id}', '${post.title}', 'https://picsum.photos/seed/${post.title}/536/354')
      `)
        .then(() => getPromiseJsonPlaceholder(`/comments?postId=${post.id}`))
        .then(comments => Promise.all(
          comments.map(comment => db.query(`
            INSERT INTO comments(email, body, post_id)
            VALUES('${comment.email}', '${comment.body}', '${post.id}')
          `))
        ))
        .then(res => db.query(`ALTER SEQUENCE comments_id_seq RESTART WITH ${res.length + 1};`))
        .catch(err => console.log('Errror comment', err))
      )
    )
  })
  .then(res => db.query(`ALTER SEQUENCE posts_id_seq RESTART WITH ${res.length + 1};`))
  .then(() => console.log('all done seeding!'))
  .catch(err => {
    console.log('Errror there', err);
    throw err;
  })
}