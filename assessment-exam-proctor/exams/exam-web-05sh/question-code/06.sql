-- ===================== --
-- QUESTION 06 (STRETCH) --
-- ===================== --
--
-- Similar to the previous question, except we want ALL books now:
-- Fetch the id and isbn for ALL books, along with the name of the store they are assigned to
-- Books that are out of stock should still be included, just like before
-- Note: We no longer not want to limit the results to only books that are assigned a store
--       if a book is not in store, it should be be in the results but have a null store name
-- Note: for each book we need the store name, not just the store_id

-- ============ --
-- TEST COMMAND --
-- ============ --
--
-- sqlite3 -column -header supporting-files/test.sqlite3 < answers/06.sql

-- ================ --
-- EXPECTED RESULTS --
-- ================ --
-------------------------------
-- id    isbn        name
-- ----  ----------  ----------
-- 1     0345540115  Vancouver
-- 2     081223720X
-- 3     0205028802  Vancouver
-- 4     0205028802  Toronto
-- 10    0805073698  Montreal
-- 12    0805073698  Toronto
-- 14    1250067057  Vancouver
-- 16    1250067057
-- 40    0205028802  Montreal
-- 44    0205028802
-------------------------------

-- ============ --
-- SQL SOLUTION --
-- ============ --
--
-- MODIFY THE QUERY BELOW:

SELECT 'implement me';
