-- =========== --
-- QUESTION 04 --
-- =========== --
--
-- Fetch only the books that are in stock in the Vancouver store (id: 1)
-- Include only their id, title and ISBN


SELECT id, title, isbn
  FROM books
  WHERE store_id = 1
  AND stock > 0;
