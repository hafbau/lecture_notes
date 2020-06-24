-- ===================== --
-- QUESTION 08 (STRETCH) --
-- ===================== --
--
-- Similar to the previous question, except we'd like to exclude stores that have less than 3 books:
-- For stores with 3 or more book records, list their names, along with how many books they are assigned.
-- Note: We do NOT want to take into account their stock. Having 0 in stock doesn't matter.
-- The resultset should include two columns: store_name, and book_count
-- Tip: you will need to rename the columns in the resultset accordingly


SELECT stores.name AS store_name, COUNT(books.id) AS book_count
  FROM stores JOIN books ON books.store_id = stores.id
  GROUP BY stores.name
  HAVING book_count >= 3;
