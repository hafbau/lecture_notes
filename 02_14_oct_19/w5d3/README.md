SQL in our apps
===

Thanks crew! Here's a link to [code and notes](https://github.com/hafbau/lecture_notes/tree/master/02_14_oct_19/w5d3)

### Review of Slogram's code

- modularizing
- declarative / abstraction

We moved away from having a giant `index.js` file to having multiple but focussed `.js` files in our `./public` folder. Why is this better? ~~Because Hafiz said so!~~ The reasons you guys came up with are *Readability* and *Maintability* - spot on!


### Moving to a database

- db server / client - we discussed Postgres installation on your machines (Vagrant) as database server, running typically on port `5432`. To connect to it, we need a *client* (like we needed `snake_client` to connect to `snake_server` from week two).
- we used an npm package `pg` to connect like so:

```js
const { Client } = require('pg');

const connectOptions = {
  host: '<address of your postgres server e.g. localhost>,
  user: '<database user, uses default if not specified>,
  database: '<database name that you have created with "CREATE DATABASE database name">',
  password: '<database user password>',
  port: '<port where the postgres server is running e.g. 5432>',
};

const pgClient = new Client(connectOptions);

pgClient
  .connect()
  .then(console.log(`Connected to ${pgClient.database}`))
  .catch(err => console.error('connection error', err.stack));
```

- .env

For security (e.g. having credentials on github!) and flexibility (e.g. working in a team or deploying to the cloud) reasons, our `connectOptions` usually looks like so:

```js
const { Client } = require('pg');
// this is the preferred way to load environment variables into your app
// requires you to have created a `.env` file at the root level of your folder.
// you would also add .env to your .gitignore to avoid leaking secrets
require('dotenv').config();

const connectOptions = {
  host: process.env.PGHOST,
  user: process.env.PGUSER,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
};

// ... redacted code
```

### Querying the DB

- Build SQL query as string in JS
  + selects
  + inserts
  + nested json query??

Have a look at `dataAccess/index.js` file, where we wrote basically `selects` and `inserts` queries. Also, this is a summary of the CRUD syntax for a table:

### SQL Syntax Review

[Credits to Andy's notes](https://github.com/andydlindsay/12weekW5D3/blob/master/README.md)

#### Browse

```sql
SELECT * FROM <table>;
```

#### Read

```sql
SELECT * FROM <table> WHERE id = <id>;
```

#### Edit

```sql
UPDATE <table> SET <column> = <value> WHERE id = <id>;
```

#### Add

```sql
INSERT INTO <table> (<column1>, <column2>) VALUES (<value1>, <value2>);
```

#### Delete

```sql
DELETE FROM <table> WHERE id = <id>;
```

### SQL Injection

It is unsafe to trust any data coming from the user, so we stopped using template strings to insert values into our database and used *prepared statements* instead.

**Changed from:**

```js
db.query(`
  INSERT INTO posts(title, photo)
  VALUES ('${post.title}', '${post.photo}') RETURNING *;
`)
```

**To this:**

```js
db.query(`
  INSERT INTO posts(title, photo)
  VALUES ($1, $2)
  RETURNING *;
`, ['title here', 'photo url here'])
```

### Modularizing (How we did it!)

- we have our database connection logic in a file - `db/index.js`
- that file exports the connection object to our database - `module.exports = pgClient`
- we have all our data access (SQL queries) logics in a separate `.js` file - `dataAccess/index.js`
- since our data access logics depend on the connection to a database, we exported a function that will need to be called with a database connection object.

```js
// dataAccess/index.js file
module.exports = function(db) {// expecting to be called with a `db` object
 return {// returns an object with data access functions
 // ... data access functions here
 }
}
```
- when this exported function is called it returns an object containing all our defined data access functions e.g. `findAllPosts`, `createPost` etc
- our routes are separated into files repesenting resources in our app e.g. `posts`, `comments` etc. All kept under a folder - `./routes`
- all our routes files (`./routes/posts.js` and `./routes/comments.js`) depend on our data access logics so we made the files export a function expecting to be called with the data access object.

```js
module.exports = function (dataHelpers) {// expecting to be called with data access helpers
  postRoutes.get('/', (req, res) => {
    dataHelpers.findPostsWithComments().then(posts => {
      res.json(posts)
    })
  });
  // ... other post routes here

}
```
- all the above come together in our `server.js`

```js
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./src/db/index');// database connection object
const seedDB = require('./src/db/seeds/index');// seeding logic expecting a db connection

const dataAccess = require('./src/dataAccess/index')(db);// data access logic called with database connection object
const postRoutes = require('./src/routes/posts')(dataAccess);// routes logic depending on data access helpers
const commentRoutes = require('./src/routes/comments')(dataAccess);// routes logic depending on data access helpers

const app = express();

app.use(bodyParser());
app.use('/posts', postRoutes);
app.use('/comments', commentRoutes);
```

### Summary

- created database using `psql` - `CREATE DATABASE slogram;`
- connect to the database - `\c slogram`
- defined the tables creation logic in `migrations/index.sql`
- create tables using `psql` by running the migration file - `\i migrations/index.sql`
- create your seed data
- write your data helpers as needed
- use data helpers in your routes
- have fun doing it all :)


Thanks for today's class!

