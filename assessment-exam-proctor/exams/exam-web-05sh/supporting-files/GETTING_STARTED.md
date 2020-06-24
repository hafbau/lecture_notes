SQL Programming Test 
=====

Welcome to the SQL Programming Test. This one tests your ability to craft common SQL `select` queries. 

It contains 6 core challenges (90/100) and 3 stretch challenges (10/100).

## Domain

The database for this test is already created and seeded with data. 

We are simulating inventory management for a small book store chain.

There are only two tables:

1. `stores`
  - There are 3 stores. Each store has a name and which years it opened and closed (if it did close)
2. `books`
  - A given book can have multiple records in this table, one for each store that it is typically available to purchase
  - The price of the book is in cents (`price_cents` column). Therefore 100 => $1
  - Books don't always have a store. If a book has NULL for `store_id` it is also available at the warehouse

The data for each table is shown below. Alternatively, you can look at the `supporting-files/reset.sql` for the SQL used to create and seed the database. 

**You do not need to edit or run the reset.sql file.** It is simply for your reference.


## SQLite

Instead of using PostgreSQL, this test uses a simpler database system known as SQLite. Don't worry, we'll give you the necessary commands to work with sqlite3. 


## Data

Below is the data that is present in the database, for your reference.

**stores:*

```
id          name        year_opened  year_closed
----------  ----------  -----------  -----------
1           Vancouver   1998         2010       
2           Toronto     1950         2018       
3           Montreal    2014         NULL       
```

**books:*

```
id   store_id  title                         isbn        stock  price_cents
---  --------  ----------------------------  ----------  -----  -----------
1    1         The Iceman                    0345540115  5      500        
2    NULL      Why Education Is Useless      081223720X  50     550        
3    1         Writing With Style            0205028802  0      2000       
4    2         Writing With Style            0205028802  1      1800       
10   3         Why Zebras Don't Get Ulcers   0805073698  11     3200       
12   2         Why Zebras Don't Get Ulcers   0805073698  2      3000       
14   1         Extreme Ownership             1250067057  2      2900       
16   NULL      Extreme Ownership             1250067057  20     2800       
40   3         Writing With Style            0205028802  4      1500       
44   NULL      Writing With Style            0205028802  40     1300       
```

**PRO TIP 1:** To connect to the database and run ad-hoc SQL queries, simply start the REPL using the following command from the root directory:

```sh
sqlite3 -column -header supporting-files/test.sqlite3
```

Then use .quit or CTRL-D to exit their REPL.

## Getting Started

**PRO TIP 2:** While working on your solution to each challenge, use the `sqlite3` command to test your query against the test database. For example, start with this: 

```sh
sqlite3 -column -header supporting-files/test.sqlite3 < answers/00.sql
```

**More Tips:**
- If you prefer, you can exclude the -column and/or -header flags, which will change the format for the data output
- Always ensure that you are testing the correct question file. We've heard of students wasting time because they were running the wrong file/question number.


Don't forget to run the npm command to run mocha tests and verify your solution, which will also register your work and help progress your score.

For example:

```sh
npm run question 0
```

## Go!

That should give you enough to get started and complete the core questions. While you should aim to hit 90 within your first two hours, you do have extra time today (until end-of-day) to reach this mark.
