-- =========== --
-- QUESTION 01 --
-- =========== --
--
-- Fetch all books ordered by isbn first (ascending) and then store_id (descending)
-- Include all the columns from the table

-- ============ --
-- TEST COMMAND --
-- ============ --
--
-- sqlite3 -column -header supporting-files/test.sqlite3 < answers/01.sql

-- ================ --
-- EXPECTED RESULTS --
-- ================ --
------------------------------------------------------------------------
-- id    store_id    title               isbn        stock   price_cents
-- ----  ----------  ------------------  ----------  ------  -----------
-- 40    3           Writing With Style  0205028802  4       1500
-- 4     2           Writing With Style  0205028802  1       1800
-- 3     1           Writing With Style  0205028802  0       2000
-- 44                Writing With Style  0205028802  40      1300
-- 1     1           The Iceman          0345540115  5       500
-- 10    3           Why Zebras Don't G  0805073698  11      3200
-- 12    2           Why Zebras Don't G  0805073698  2       3000
-- 2                 Why Education Is U  081223720X  50      550
-- 14    1           Extreme Ownership   1250067057  2       2900
-- 16                Extreme Ownership   1250067057  20      2800
-----------------------------------------------------------------------

-- ============ --
-- SQL SOLUTION --
-- ============ --
--
-- MODIFY THE QUERY BELOW:

SELECT 'implement me';
