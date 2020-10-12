const faker = require('faker');
const { pool, insertBulkData } = require('./seedHelpers');

const createUserTable = () => `
  -- First delete table if it already exists
  DROP TABLE IF EXISTS users;

  -- Create table
  CREATE TABLE users (
    id SERIAL PRIMARY KEY NOT NULL,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    email TEXT NOT NULL,
    age SMALLINT NOT NULL,
    country TEXT NOT NULL,
    payment_due_date DATE NOT NULL
  );
`;

pool.query(createUserTable())
  .then(() => {
    // generates fake users
    const fakeUsers = [];
    for (let i = 0; i < 20000; i++) {
      const first_name = faker.name.firstName().replace("'", "");
      const last_name = faker.name.lastName().replace("'", "");
      fakeUsers.push({
        first_name,
        last_name,
        email: faker.internet.email(first_name, last_name),
        age: faker.random.number({ min: 18, max: 60 }),
        country: faker.address.country().replace("'", ""),
        payment_due_date: faker.date
          .between('2020-09-01', '2020-10-31')
          .toLocaleDateString()
      })
    }
    return fakeUsers;
  })
  .then(userData => {
    const query = insertBulkData('users', userData);
    return pool.query(query);
  })
  .then((result) => {
    console.log('Insertion done');
    console.log('result :>> ', result.rowCount, 'records inserted!');
  })
  .catch(err => console.error('ERROR', err))
  .finally(() => pool.end())