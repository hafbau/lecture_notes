-- =========== --
-- QUESTION 02 --
-- =========== --
--
-- Fetch all stores that opened after 1997
-- Order results in reverse chronological order based on the year that they opened (newest first)
-- Include all the columns from the table


SELECT * FROM stores
  WHERE year_opened > 1997
  ORDER BY year_opened DESC;
