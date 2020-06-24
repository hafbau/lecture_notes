-- =========== --
-- QUESTION 01 --
-- =========== --
--
-- Fetch all books ordered by isbn first (ascending) and then store_id (descending)
-- Include all the columns from the table


SELECT id, store_id, title, isbn, stock, price_cents
  FROM books
  ORDER BY isbn ASC, store_id DESC;
