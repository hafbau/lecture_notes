SQL INTRODUCTION
===

![Jokes](https://res.cloudinary.com/practicaldev/image/fetch/s--zqHC2NpH--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/x43m8xsus78o3uehowcp.jpg)

Notes and code [here](https://github.com/hafbau/lecture_notes/tree/master/02_14_oct_19/w5d1%20-%20Intro%20SQL)

---

Topics 🔧:

- Relational Databases

 - schema, indexes, data-types
 - foreign key, relationships [more tomorrow]
 - data normalization [tomorrow]

- SQL

 - Tables
 - Select
 - Join 


SOURCE: [These notes are adapted from Travis Borsa's notes](https://github.com/jensen/sqlintro-notes/).

---

## Review  📢

so far we have stored data with javascript objects as in tinyapp👶.
but there were a few problems with this approach.

- there was no data persistence,
 when the app was restarted any url or new user we added would not be saved
- Data could become disorganized, and there was nothing ensuring it was stored with the correct format.

Then in tweeter 🐦 you used MongoDB to solve some of these problems.
with mongo we were able to store our javascript objects in a database and achieve persistence!
  
With mongo objects were stored in _Collections_ as _Documents_

---

Mongo has many advantages it is flexible it allows us to store and retrieve data as JSON a format that is easy to use with javascript development.

But...

- It can be hard to search through
- It can get disorganized


We want a SPECIFIC STRUCTURE TO OUR DATA.

So....

---

# Relational Database

![Tables](https://raw.githubusercontent.com/tborsa/LighthouseLabs/master/lectures/Week4/Day1/Lecture/assets/table.gif)

A database that stores information in tables where each
individual thing or entry in the db takes up a row of the table
each table can have relationships to other tables.

relations are what allow us to organize our data in intuitive ways.

## Relational Database Management Systems

is the implementation of a relational database
that allows you to create databases and manage your
data examples are mySQL, Oracle, postgresql, ...

---

# SQL ( structured query language)

![SQL or SEQUEL](https://www.explainxkcd.com/wiki/images/d/d1/imho.png)

- language that allows us look for (query) and insert data into an sql database

- almost all relational databases use SQL.

- SQL is not like other programming languages we have learned so far but is query language specifically for data
You can't write programs in sql

- DDL(Data Definition Language) : DDL or Data Definition Language actually consists of the SQL commands that can be used to define the database schema. It simply deals with descriptions of the database schema and is used to create and modify the structure of database objects in the database. Examples of DDL commands: (CREATE, DROP)

- DQL(Data Query Language) Command is to get some schema relation based on the query passed to it. Example of DQL: (SELECT)

- DML(Data Manipulation Language) : The SQL commands that deals with the manipulation of data present in the database belong to DML or Data Manipulation Language and this includes most of the SQL statements. Examples of DML: (INSERT, UPDATE, DELETE)

- PSQL: Database client that allows us to connect and interact with POSTGRESQL database with sql commands.

---

## DDL

## Create Database
## Creating a Table

![Tables](https://raw.githubusercontent.com/tborsa/LighthouseLabs/master/lectures/Week4/Day1/Lecture/assets/table.jpeg)

We know what our schema looks like and we can send commands to the database. When creating a table we provide the types and constraints to the named columns.

```sql
CREATE TABLE albums (
 id SERIAL PRIMARY KEY NOT NULL,
 title TEXT NOT NULL,
 year INTEGER NOT NULL,
 artist_id INTEGER NOT NULL REFERENCES artists(id) ON DELETE CASCADE
);
 artist_id INTEGER NOT NULL REFERENCES tablename(fieldname) ON DELETE CASCADE
```


### Schema 📑

The skeletal structure representing how data is to be stored in a database.
Specifies Constraints on the data.

---

### Indexes 👆
A unique identifier that improves the speed of data fetches.

---

### Data Types 📚

When defining columns for the tables you will need to specify the data type. `INTEGER, VARCHAR, TEXT, BOOLEAN, DATE` are common examples.

- Primary key column. Use the name `id` and then `SERIAL PRIMARY KEY NOT NULL`.
- Names, emails, usernames and passwords can all be stored as `VARCHAR(255)`.
- Foreign key columns. Add `_id` to the singular name of the column you are referencing. Artists to albums would be `album_id`. The type would be `INTEGER` but you also should create the foreign key with `REFERENCES albums(id) ON DELETE CASCADE`.
- Dates would use the `DATE` type. If you needed [date and time](https://www.postgresql.org/docs/current/static/datatype-datetime.html) you would use `TIMESTAMP`.

You will use `INTEGER` to represent most [numbers](https://www.postgresql.org/docs/current/static/datatype-numeric.html). There are other *sizes* of integers as well.

- __SMALLINT__ -32,768 to 32,767 (thirty-two thousand)
- __INTEGER__ -2,147,483,648 to 2,147,483,647 (two billion)
- __BIGINT__ -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 (nine quintillion)
- __SERIAL__ 1 to 2,147,483,647 (auto incrementing)

---

## Naming Convention 🔖

- Use `snake_case` 🐍 for table and column names.
- Pluralize tables names, column names should be singular.
- Call your primary key `id`. Why not?
- For most foreign keys use `<table>_id`.

---

## Foreign Key 🔑
A FOREIGN KEY is a field (or collection of fields) in one table that refers to the PRIMARY KEY in another table.

The table containing the foreign key is called the child table, and the table containing the candidate key is called the referenced or parent table.

The relationship between 2 tables matches the Primary Key in one of the tables with a Foreign Key in the second table.

Foreign keys can be NULL.

---

## Relationships 👪

With relational databases relationships are made with foreign keys.
The relationship links one tables entry with other table entries.
The Types of relationships are..

 - one to one
 - many to one
 - many to many


 __The foreign key is on the many side.__ *The foreign key is on the many side.* `The foreign key is on the many side.`

---

## ERD 📝

Diagram representing the schema of a database.
List tables and their columns/ data types.
Lines between tables represent relationships, and whether that relationship is one-to-one or one to many.

---

## Database Normalization 📤📥

In the following examples we'll look at a database that stores information about Artists and the Albums that they have released! 💽

Database normalization allows us to realize one of the major benefits of relational databases. We normalize our database to reduce duplicate data.

It is incredibly difficult to manage a database that stores the same information in several places. Let's imagine that we stored our Album data as follows.

```
+-----------------------------------------+
| albums                                 |
+-----------------------------------------+
| id | title             | artist_name    |
+-----------------------------------------+
| 1  | Father of Asahd   | DJ Khaled      |
| 2  | The Blueprint     | Jay-z          |
| 3  | Aquemini          | Outkast        |
| 4  | The Doggfather    | Snoop Dogg     |
| 5  | DAMN              | Kendrick Lamar |
| 6  | We The Best       | DJ Khaled      |
| 7  | Doggystyle        | Snoop Dogg     |
+-----------------------------------------+
```

---

We would consider this denormalized because the artist name is repeated for all of that artist's albums. If Snoop Dogg decides to change his name to Snoop Lion then we have to edit every Snoop album to reflect that.


In order to normalize this database we would split the data into two related tables.

```
+-----------------------------------------+ 
| albums                                 | 
+-----------------------------------------+ 
| id | title             | artist_id      |
+-----------------------------------------+ 
| 1  | Father of Asahd   | 1              |
| 2  | The Blueprint     | 2              | 
| 3  | Aquemini          | 3              |
| 4  | The Doggfather    | 5              |
| 5  | DAMN              | 4              |
| 6  | We The Best       | 1              | 
| 7  | Doggystyle        | 5              |
+-----------------------------------------+

```

```

+---------------------+
| artists             |
+---------------------+
| id | name           |
+---------------------+
| 1  | DJ Khaled      |
| 2  | Jay-Z          |
| 3  | Outkast        |
| 4  | Kendrick Lamar |
| 5  | Snoop Dogg     |
+---------------------+

```

---


We show that each Album belongs to an artist. The details of the artist are stored separately. When we need to gather this information together we use a query to ask the database for it in the structure that we want.

If we needed to change the name of an artist for any reason we only need to change the one field in the `artists` table.


## DML / DQL

## CREATE/INSERT

Before we can search for data we need to add it. In order to create records in a table we use the [INSERT](https://www.postgresql.org/docs/current/static/sql-insert.html) command.

```sql
INSERT INTO "artists" (id, name)
VALUES(1, 'Name');

INSERT INTO "albums" (
 id,
 title,
 year,
 artist_id
) VALUES(
 1,
 'The Earth is not a Cold Dead Place',
 2003,
 1
);
```

If you need to insert multiple records at the same time a single query is quicker than many. It is important to do as few queries as possible to keep performance high.

*

```sql
INSERT INTO "tracks" (title, number, album_id) VALUES
('First Breath After Coma', 1, 1),
('Second Breath After Coma', 2, 1),
('Third Breath After Coma', 3, 1),
('I am alive After Coma', 4, 1);
```

---


## SELECT

The selection of data is likely to cause the most confusion for you. There are 6 different clauses that you would use to query for data.

- __SELECT__ - List the columns and aggregate data you are interested in.
- __FROM__ - Provide one or more tables that you want data from.
- __WHERE__ - Only select records that match a condition.
- __GROUP BY__ - Combine the results based on a column so an aggregate can be applied to each group.
- __HAVING__ - Only select the results that match a condition.
- __ORDER BY__ - Describe the parameters for the results ordering.


---  

### 💽 I want the name and id of all artists.

*
```
//This will display the name and id columns from the
//artists table.
```

```sql
SELECT name, id FROM artists;
```
*  

---    

### 💽 I want to see Daft Punk's albums.

*  
```  
//This will display all columns for albums
//where artist_id = the given number
```

```sql
SELECT * 
FROM albums
WHERE artist_id = ?;
```  
*  

---  

### 💽 I want all the tracks of Discovery.  

*  
```
//This will display the title and  track nubmer
// for tracks where album_id = given number
```

```sql
SELECT title, number as track_number
FROM tracks
WHERE album_id = ?;
```  
*  

---  

### 💽 I want the name and year each album was released ordered by year.

*  
```
//This will display the name and year columns from the
//albums table.
```

```sql
SELECT name, year 
FROM albums
ORDER BY year;
```
*  

---  

### 💽 I want to see how many tracks there are.

*  
```
//This will display the number of rows, which represents
//the number of tracks.
```

```sql
SELECT count(id) FROM tracks;
```  
*  

---  

### 💽 I want to see how many tracks there are for a specific album

*  
```  
// This will display the count for all the rows matching
// the condition of the artist being id 1.
// With the AS clause we can alias the column name to
// give us more descriptive results.
```

```sql
SELECT count(id) AS tracks_count
FROM tracks
WHERE album_id = 1;
```
*  

---  

### 💽 I want the first tracks on all albums released by DJ Khaled.

Problem?

The artist information is stored in a separate table

---  

## JOIN 🤝

![Joins](https://raw.githubusercontent.com/tborsa/LighthouseLabs/master/lectures/Week4/Day1/Lecture/assets/joins.jpeg)

There are 5 kinds of joins.

- `INNER JOIN` is the same as `JOIN`
- `LEFT OUTER JOIN` is the same as `LEFT JOIN`
- `RIGHT OUTER JOIN` is the same as `RIGHT JOIN`
- `FULL OUTER JOIN` is the same as `OUTER JOIN`
- `CROSS JOIN`

---  

When performing a `JOIN` you define the type of join, the two tables involved in the operation and the condition that is used to join on.

```sql
SELECT * FROM T1 JOIN T2 ON <condition>;
```

In this example `T1` is the table on the `LEFT` of the join and `T2` is on the `RIGHT`. This becomes important when working with `OUTER JOIN`.

---

When we start joining tables we need to be unambiguous. We will target columns by table.column naming.

- `track.id`
- `track.name`
- `album.name`

[Queries with FROM](https://www.postgresql.org/docs/current/static/queries-table-expressions.html#QUERIES-FROM)

---


### INNER JOIN

With an `INNER JOIN` only rows where the `ON` condition is met are included in the results.

```sql
INSERT INTO "artists" (id, name)
VALUES(666, 'Fizzle the Sizzl');
```


```sql
SELECT artist.id, artist.name AS artist_name,
album.title AS album_title
FROM artists
INNER JOIN albums
ON artists.id = albums.artist_id;
```

Notice that the `artists.id = albums.artist_id` condition was not satisfied for the up and coming artist "Fizzle the Sizzl" because she has not yet dropped her mixtape 💾 🔥🔥🔥 .

---


### OUTER JOIN

The `OUTER JOIN` requires us to specify whether it is the `LEFT` or `RIGHT` table that is used to provide unmatched rows. For any row where the condition was not met a row is added with null for columns from the second table.

```sql
SELECT artist.id, artist.name AS artist_name, album.title AS album_title
FROM artists
LEFT OUTER JOIN albums
ON artists.id = albums.artist_id;

```

Since this was a `LEFT JOIN` after all the rows are matched the remaining ones are appended, and we can see out girl Fizzle.

---

__RIGHT OUTER JOIN__

This is an uncommon join. Since we have to specify the side to join on we have two options. In the above example the albums table is on the right side of the join. If we turn this into a `RIGHT OUTER JOIN` then we get different results back.

```sql
SELECT artists.id, artists.name AS artist_name, album.title AS album_title
FROM artists
RIGHT OUTER JOIN albums
ON artists.id = albums.artist_id;

```

If we wanted the same results as above (the `LEFT JOIN` results) with a `RIGHT JOIN` then we would need to alter the query to put the artists table on the right side of the join.

```sql
SELECT artists.id, artists.name AS artist_name, album.title AS album_title
FROM albums
RIGHT OUTER JOIN artists
ON artists.id = albums.artist_id;
```

---

### CROSS JOIN

Using a `CROSS JOIN` we can get the cartesian product. A row for every artist and a row for every album. This isn't very useful and is only provided for completeness.

```sql
SELECT *
FROM artists
CROSS JOIN albums;
```

Which achieves the same result set as:

```sql
SELECT *
FROM artists, albums;
```

Adding a where clause to filter out the duplicate results acts just like an `INNER JOIN`.

```sql
SELECT *
FROM artists, albums
WHERE artists.id = albums.artists_id;
```

---

## UPDATE & DELETE

These queries seem to be a lot simpler than ones that begin with `SELECT`. BUT The `UPDATE` and `DELETE` are the most dangerous queries because they change or remove data. This means you need to be very careful when using either of them. Never write an `UPDATE` or `DELETE` query without a `WHERE` clause. Why?

The key takeaway is to be extra careful working on production databases. Test all your update and delete operations on a development database.

---

[UPDATE](https://www.postgresql.org/docs/current/static/sql-update.html)

Let's say that a artist has changed their stage name part way through their career. We could update their name with.

```sql
UPDATE artists
SET name='Sizzl'
WHERE id = 666;
```

---

[DELETE](https://www.postgresql.org/docs/current/static/sql-delete.html)

If you want to delete a specific row you specify a `WHERE` clause. Deleting data should be avoided if possible. 

```sql
DELETE FROM artists WHERE id = 3;
```

Some people prefer to have a `deleted_at` column that stores a DATE. That way you can still filter out deleted results without having to lose the data. Storage is not expensive.

You've seen a reference to `ON DELETE CASCADE` for foreign key references. If we delete an artist then we may want to delete all of the albums and tracks that point to the artist. The cascading delete functionality is a [constraint](https://www.postgresql.org/docs/current/static/ddl-constraints.html). It is not necessary to use CASCADE. If you don't you may notice some issues when trying to delete something that has a foreign reference to it.
