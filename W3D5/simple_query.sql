EXPLAIN ANALYZE SELECT
  *
FROM
  cats
WHERE
  color = 'Silver';

EXPLAIN ANALYZE SELECT
  cats.breed
FROM
  cats
JOIN
  cattoys ON cattoys.cat_id = cats.id
JOIN
  toys ON cattoys.toy_id = toys.id
WHERE
  cats.name = 'Noel';

EXPLAIN ANALYZE SELECT
  toys.name AS "Freyja's Toys"
FROM
  cats
JOIN
  cattoys ON cattoys.cat_id = cats.id
JOIN
  toys ON cattoys.toy_id = toys.id
WHERE
  cats.name = 'Freyja';

  
EXPLAIN ANALYZE SELECT
  toys.name AS "Toys Belonging To British Shorthair Cats"
FROM 
  cats
JOIN
  cattoys ON cattoys.cat_id = cats.id
JOIN
  toys ON cattoys.toy_id = toys.id
WHERE
  cats.breed = 'British Shorthair';

EXPLAIN ANALYZE SELECT
  toys.name AS "Toys", toys.color AS "Color", toys.price AS "Price"
FROM
  toys
WHERE
  toys.price < 10;




-- This gives us the same answer as the previous query.
SELECT
  *
FROM
  cats AS c1
JOIN 
  cats AS c2 ON (c1.color = c2.color)
WHERE
  c1.name = 'Freyja'