-- ===================== --
-- QUESTION 08 (STRETCH) --
-- ===================== --
--
-- Similar to the previous question, except we'd like to exclude stores that have less than 3 books:
-- For stores with 3 or more book records, list their names, along with how many books they are assigned.
-- Note: We do NOT want to take into account their stock. Having 0 in stock doesn't matter.
-- The resultset should include two columns: store_name, and book_count
-- Tip: you will need to rename the columns in the resultset accordingly

-- ============ --
-- TEST COMMAND --
-- ============ --
--
-- sqlite3 -column -header supporting-files/test.sqlite3 < answers/08.sql

-- ================ --
-- EXPECTED RESULTS --
-- ================ --
-------------------------
-- store_name  book_count
-- ----------  ----------
-- Vancouver   3
-------------------------

-- ============ --
-- SQL SOLUTION --
-- ============ --
--
-- MODIFY THE QUERY BELOW:

SELECT 'implement me';
