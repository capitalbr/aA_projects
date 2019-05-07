
DROP TABLE cat_toys;
DROP TABLE cats;
DROP TABLE toys;


CREATE TABLE cats (
  id       SERIAL PRIMARY KEY,
  name     VARCHAR,
  color    VARCHAR,
  breed    VARCHAR
);

CREATE TABLE toys (
  id       SERIAL PRIMARY KEY,
  name     VARCHAR,
  color    VARCHAR,
  price    FLOAT
);

CREATE TABLE cat_toys (
  id       SERIAL PRIMARY KEY,
  cat_id   INTEGER REFERENCES cats(id),
  toy_id   INTEGER REFERENCES toys(id)
);

-- INSERT INTO Customer (FirstName, LastName, City, Country, Phone)
-- VALUES ('Craig', 'Smith', 'New York', 'USA', 1-01-993 2800)

INSERT INTO cats (name, color, breed)
VALUES ('Thorns', 'blue/purple', 'Hellcat');

INSERT INTO cats (name, color, breed)
VALUES ('Jerk', 'green', 'Stinky');

INSERT INTO cats (name, color, breed)
VALUES ('catty', 'purplish', 'wildcat');

INSERT INTO cats (name, color, breed)
VALUES ('john', 'green', 'sabertooth');

INSERT INTO cats (name, color, breed)
VALUES ('Dork', 'invisible', 'cat in a hat');

INSERT INTO cats (name, color, breed)
VALUES ('Dork', 'yellow', 'Deadcat');

INSERT INTO cats (name, color, breed)
VALUES ('Dork', 'white', 'Sandcat');

INSERT INTO cats (name, color, breed)
VALUES ('Dork', 'black', 'grinch');


-- 

INSERT INTO toys (name, color, price)
VALUES ('Stick', 'yellow', 11.05);

INSERT INTO toys (name, color, price)
VALUES ('charles', 'green', 2.12);

INSERT INTO toys (name, color, price)
VALUES ('ball', 'brown', 1.14);

INSERT INTO toys (name, color, price)
VALUES ('24k gold bracelet', 'gold', 0.01);

INSERT INTO toys (name, color, price)
VALUES ('Frisbee', 'transparent', 0.00);

INSERT INTO toys (name, color, price)
VALUES ('Laser Pointer', 'brown', 0.35);

--

INSERT INTO cat_toys (cat_id, toy_id)
VALUES (1, 1);

INSERT INTO cat_toys (cat_id, toy_id)
VALUES (2, 2);

INSERT INTO cat_toys (cat_id, toy_id)
VALUES (3, 3);

INSERT INTO cat_toys (cat_id, toy_id)
VALUES (4, 4);

INSERT INTO cat_toys (cat_id, toy_id)
VALUES (5, 5);

INSERT INTO cat_toys (cat_id, toy_id)
VALUES (3, 2);


