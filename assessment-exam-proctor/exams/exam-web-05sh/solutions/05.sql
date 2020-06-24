-- =========== --
-- QUESTION 05 --
-- =========== --
--
-- Fetch the id and isbn for all books that are assigned to a store, along with the name of the store they are assigned to
-- Books that are out of stock should still be included
-- Note: for each book we need the store name, not just the store_id


SELECT books.id, books.isbn, stores.name
  FROM stores INNER JOIN books ON books.store_id = stores.id;
