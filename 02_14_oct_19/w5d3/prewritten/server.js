const express = require('express');
const bodyParser = require('body-parser');
const db = require('./src/db/index');
const seedDB = require('./src/db/seeds/index');

const dataAccess = require('./src/dataAccess/index')(db);
const postRoutes = require('./src/routes/posts')(dataAccess);
const commentRoutes = require('./src/routes/comments')(dataAccess);

const app = express();

app.use(bodyParser());
app.use('/posts', postRoutes);
app.use('/comments', commentRoutes);

app.use(express.static('public'));

app.get('/db_reset', (_, res) => {
  seedDB(db)
  .then(() => res.status(201).send('Db is reset'))
  .catch(err => res.status(500).send('Could not reset database!'));
})

app.listen(3000, () => {
  console.log('app is listening on port 3000');
});
