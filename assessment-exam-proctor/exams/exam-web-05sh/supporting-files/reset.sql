----------------------------
-- SCHEMA & SEEDS RESET FILE
-- DO NOT EDIT
----------------------------

DROP TABLE IF EXISTS stores;
CREATE TABLE stores (
  id INTEGER PRIMARY KEY,
  name VARCHAR NOT NULL,
  year_opened INTEGER,
  year_closed INTEGER
);

DROP TABLE IF EXISTS books;
CREATE TABLE books (
  id INTEGER PRIMARY KEY,
  store_id INTEGER REFERENCES stores(id),
  title VARCHAR NOT NULL,
  isbn VARCHAR NOT NULL,
  stock INTEGER,
  price_cents INTEGER
);

INSERT INTO stores (id, name, year_opened, year_closed)
  VALUES
  (1, 'Vancouver', 1998, 2010),
  (2, 'Toronto', 1950, 2018),
  (3, 'Montreal', 2014, NULL)
;

INSERT INTO books (id, store_id, title, isbn, stock, price_cents)
  VALUES
  (1, 1, 'The Iceman', '0345540115', 5, 500),

  (2, NULL, 'Why Education Is Useless', '081223720X', 50, 550),

  (3, 1, 'Writing With Style', '0205028802', 0, 2000),
  (4, 2, 'Writing With Style', '0205028802', 1, 1800),

  (10, 3, 'Why Zebras Don''t Get Ulcers', '0805073698', 11, 3200),
  (12, 2, 'Why Zebras Don''t Get Ulcers', '0805073698', 2, 3000),

  (14, 1, 'Extreme Ownership', '1250067057', 2, 2900),
  (16, NULL, 'Extreme Ownership', '1250067057', 20, 2800),

  (40, 3, 'Writing With Style', '0205028802', 4, 1500),
  (44, NULL, 'Writing With Style', '0205028802', 40, 1300)
;

