-- ===================== --
-- QUESTION 07 (STRETCH) --
-- ===================== --
--
-- List all store names, along with how many books each is assigned, regardless of their in-stock situation
-- The resultset should include two columns: store_name, and book_count
-- Tip: you will need to rename the columns in the resultset accordingly


SELECT stores.name AS store_name, COUNT(books.id) AS book_count
  FROM stores JOIN books ON books.store_id = stores.id
  GROUP BY stores.name;
