# W05D01 - SQL Intro

### Agenda
- [x] Introduction to RDBMS
- [x] The Relational Data Model (Tables, Columns, Rows)
- [x] `SELECT` Statements
- [x] Filtering and ordering
- [x] Joining tables
- [x] Grouping records
- [x] Aggregation functions
- [x] `LIMIT` and `OFFSET`


### Relational Database Management System (RDBMS)
- A program that serves, **and** controls interactions with, one or more _Relational Databases_
- Communicates using a custom protocol (eg. `postgres://` for postgres) that sits on top of TCP
- Postgres
- Server + Client
- psql

### Relational Data model
- The **S** in **SQL** is for _structured_. This means that our data must conform to a _structure_ in order to store it in the database.
- The data itself is stored in **tables** which define things such as field names, data types, and other data constraints
- You are probably familiar with tables already if you've used programs like Excel or Calc
- Tables are made up of **columns** and **rows**
  - Columns are called `fields`
  - Rows are called `records`
- Each table describes an entity (eg. `users`, `products`, `shifts`, `tweets`)
  - The fields represent properties of the entity
  - Each record represents one unique entity
- tabular => columns + rows
- tables == entity
- columns == fields (properties of entity)
- rows == records

### Think in JS
- table == Array of objects with homogenous keys
- records === object
- fields == keys in object

### Primary Keys
- In order to reference a particular record in a table, each one is given a unique identifier we call a **Primary Key**
- Other tables can then make reference to a particular record in another table by storing the Primary Keys value
- We call a Primary Key stored in another table a **Foreign Key**
- It is through this Primary Key/Foreign Key relationship that our tables are _related_ to one another


### SELECT Challenges

For the first 6 queries, we'll be using the `users` table.

![users table](https://p47.f4.n0.cdn.getcloudapp.com/items/xQuAAZZ6/Image%202020-10-12%20at%2012.53.40%20PM.png?source=viewer&v=bfe68ca8160f12e1d34c29f6d95e6549)

1. List total number of users

```sql
SELECT COUNT(*)
FROM users;
```

2. List users over the age of 28

```sql
SELECT *
FROM users
WHERE age > 28;
```

3. List users who are over the age of 28 and have the last name 'Barrows'

```sql
SELECT *
FROM users
WHERE age > 28 AND last_name = 'Barrows';
```

4. List users over the age of 28 who live in Canada sorted by age from oldest to youngest and then last name alphabetically

```sql
SELECT *
FROM users
WHERE age > 28 AND country = 'Canada'
ORDER BY age DESC, last_name;
```

5. List users who live in Canada and whose accounts are overdue

```sql
SELECT *
FROM users
-- Whatever here is a comment
WHERE country = 'Canada' AND payment_due_date < '2020-10-12';

-- using the NOW() function to get the current date/time
SELECT *
FROM users
WHERE country = 'Canada' AND payment_due_date < NOW();

-- using CURRENT_DATE gets the current date without the time
SELECT *, NOW(), CURRENT_DATE
FROM users
WHERE country = 'Canada' AND payment_due_date < CURRENT_DATE;
```

6. List all the countries users live in; don't repeat any countries

```sql
SELECT DISTINCT country
FROM users
ORDER BY country;

-- using Group By
SELECT country
FROM users
GROUP BY country
ORDER BY country;
```

# B R E A K

**(RESUME RECORDING)**

For the rest of the queries, we'll be using the `albums` and `songs` tables.

![albums and songs](https://p47.f4.n0.cdn.getcloudapp.com/items/6quPPkWe/Image%202020-10-12%20at%2012.53.01%20PM.png?source=viewer&v=83426eefcd3eec30ecc76fd6c94918df)

7. List all albums along with their songs

```sql
SELECT *
FROM albums
JOIN songs ON albums.id = songs.album_id;
```

8. List all albums along with how many songs each album has

```sql
SELECT album_name, COUNT(songs.id)
FROM albums
JOIN songs ON albums.id = songs.album_id
GROUP BY album_name;
```

9. Enhance previous query to only include albums that have more than 10 songs

```sql
SELECT album_name, COUNT(songs.id) AS num_of_songs
FROM albums
JOIN songs ON albums.id = songs.album_id
GROUP BY album_name
HAVING COUNT(songs.id) > 10;
```

10. List ALL albums in the database, along with their songs if any

```sql
-- with RIGHT JOIN
SELECT *
FROM songs
RIGHT JOIN albums ON albums.id = songs.album_id;

-- with LEFT JOIN
SELECT *
FROM albums
LEFT JOIN songs ON albums.id = songs.album_id;
```

11. List albums along with average song rating

```sql
SELECT album_name, (ROUND(AVG(songs.rating) * 100) / 100) AS avg_song_rating
FROM albums
INNER JOIN songs ON albums.id = songs.album_id
GROUP BY album_name;
```

12. List albums and songs with rating higher than album average

```sql
SELECT
   album_name,
   song_name,
   songs.rating,
   (SELECT AVG(songs.rating) FROM songs WHERE album_id = albums.id) AS album_avg_rating
FROM albums
JOIN songs ON albums.id = songs.album_id
WHERE rating > (SELECT AVG(songs.rating) FROM songs WHERE album_id = albums.id);
```

### LIMIT and OFFSET

```sql
SELECT *
FROM users
ORDER BY age
LIMIT 10 OFFSET 10;

SELECT *
FROM users
ORDER BY age
LIMIT pageAmount OFFSET (pageNumber - 1) * pageAmount;
```

```js
// This variable substitution will be covered more accurately in w5d3
const getQuery = (pageAmount, pageNumber) => `
SELECT *
FROM users
ORDER BY age
LIMIT ${pageAmount} OFFSET (${pageNumber} - 1) * ${pageAmount} ;
`
```


### Useful Links
- [Top 10 Most Popular RDBMSs](https://www.c-sharpcorner.com/article/what-are-the-most-popular-relational-databases/)
- [Another Ranking of DBMSs](https://db-engines.com/en/ranking)
- [SELECT Queries Order of Execution](https://sqlbolt.com/lesson/select_queries_order_of_execution)
- [SQL Joins Visualizer](https://sql-joins.leopard.in.ua/)