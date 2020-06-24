-- =========== --
-- QUESTION 05 --
-- =========== --
--
-- Fetch the id and isbn for all books that are assigned to a store, along with the name of the store they are assigned to
-- Books that are out of stock should still be included
-- Note: for each book we need the store name, not just the store_id

-- ============ --
-- TEST COMMAND --
-- ============ --
--
-- sqlite3 -column -header supporting-files/test.sqlite3 < answers/05.sql

-- ================ --
-- EXPECTED RESULTS --
-- ================ --
-------------------------------
-- id    isbn        name
-- ----  ----------  ----------
-- 1     0345540115  Vancouver
-- 3     0205028802  Vancouver
-- 4     0205028802  Toronto
-- 10    0805073698  Montreal
-- 12    0805073698  Toronto
-- 14    1250067057  Vancouver
-- 40    0205028802  Montreal
-------------------------------

-- ============ --
-- SQL SOLUTION --
-- ============ --
--
-- MODIFY THE QUERY BELOW:

SELECT 'implement me';
