# W05D01 - SQL Intro

### Agenda
- [ ] Introduction to RDBMS
- [ ] The Relational Data Model (Tables, Columns, Rows)
- [ ] `SELECT` Statements
- [ ] Filtering and ordering
- [ ] Joining tables
- [ ] Grouping records
- [ ] Aggregation functions
- [ ] `LIMIT` and `OFFSET`


### 3 pillars
- Webserver
- client js
- database


### Relational Database Management System

- Postgres
- Server + Client
- psql

### Relational Data model

- tabular => columns + rows
- tables == entity
- columns == fields (properties of entity)
-rows == records

### Think in JS
- Array of objects
- records === object
- fields == keys in object






### SELECT Challenges

For the first 6 queries, we'll be using the `users` table.

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
-- using CURRENT_DATE
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

7. List all albums along with their songs

```sql

```

8. List all albums along with how many songs each album has

```sql

```

9. Enhance previous query to only include albums that have more than 10 songs

```sql

```

10. List ALL albums in the database, along with their songs if any

```sql

```

11. List albums along with average song rating

```sql

```

12. List albums and songs with rating higher than album average

```sql

```

### LIMIT and OFFSET

```sql

```

### Useful Links
- [Top 10 Most Popular RDBMSs](https://www.c-sharpcorner.com/article/what-are-the-most-popular-relational-databases/)
- [Another Ranking of DBMSs](https://db-engines.com/en/ranking)
- [SELECT Queries Order of Execution](https://sqlbolt.com/lesson/select_queries_order_of_execution)
- [SQL Joins Visualizer](https://sql-joins.leopard.in.ua/)