-- =========== --
-- QUESTION 03 --
-- =========== --
--
-- Fetch the number of books which cost more than $7

SELECT count(id)
  FROM books
  WHERE price_cents > 700;
