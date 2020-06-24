-- =========== --
-- QUESTION 02 --
-- =========== --
--
-- Fetch all stores that opened after 1997
-- Order results in reverse chronological order based on the year that they opened (newest first)
-- Include all the columns from the table

-- ============ --
-- TEST COMMAND --
-- ============ --
--
-- sqlite3 -column -header supporting-files/test.sqlite3 < answers/02.sql

-- ================ --
-- EXPECTED RESULTS --
-- ================ --
----------------------------------------------
-- id     name        year_opened  year_closed
-- -----  ----------  -----------  -----------
-- 3      Montreal    2014
-- 1      Vancouver   1998         2010
----------------------------------------------

-- ============ --
-- SQL SOLUTION --
-- ============ --
--
-- MODIFY THE QUERY BELOW:

SELECT 'implement me';
