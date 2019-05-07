
EXPLAIN SELECT
  cats.name
FROM
  cats
WHERE
  cats.name = 'Dork';


EXPLAIN SELECT 
  toys.name AS "Catty's Toys"
FROM 
  cats 
JOIN
  cat_toys ON cat_toys.cat_id = cats.id
JOIN 
  toys ON cat_toys.toy_id = toys.id
WHERE
  cats.name LIKE ('cat%');

-- EXPLAIN SELECT
--     cats.name, cats.color, toys.name, toys.color
-- FROM
--     cats
-- JOIN 
--   cat_toys ON cat_toys.toy_id = cats.id
-- JOIN 
--   toys ON cat_toys.toy_id = toys.id
-- WHERE cats.color = 'green' AND toys.color = 'green'; 

-- green things
-- ------
-- Jerk
-- charles

SELECT *
FROM
    cats
WHERE cats.color = 'green'


SELECT *
FROM
    toys
WHERE toys.color = 'green'


