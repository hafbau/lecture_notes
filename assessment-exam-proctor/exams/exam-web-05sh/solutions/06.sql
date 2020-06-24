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


SELECT books.id, books.isbn, stores.name
  FROM books LEFT OUTER JOIN stores ON books.store_id = stores.id;
