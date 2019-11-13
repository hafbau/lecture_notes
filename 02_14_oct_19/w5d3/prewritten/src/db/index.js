const {
Client
} = require('pg');

// require('dotenv').config();

const connectOptions = {
  host: process.env.PGHOST,
  user: process.env.PGUSER,
  database: process.env.PGDATABASE || 'slogram',
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
};

const pgClient = new Client(connectOptions);

pgClient
  .connect()
  .then(console.log(`Connected to ${pgClient.database}`))
  .catch(err => console.error('connection error', err.stack));

module.exports = pgClient;