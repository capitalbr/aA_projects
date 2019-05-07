PRAGMA foreign_keys = ON;
DROP TABLE question_likes;
DROP TABLE replies;
DROP TABLE question_follows;
DROP TABLE questions;
DROP TABLE users;

CREATE TABLE users(
  id INTEGER PRIMARY KEY,
  fname TEXT NOT NULL,
  lname TEXT NOT NULL
);

CREATE TABLE questions(
  id INTEGER PRIMARY KEY,
  title TEXT NOT NULL,
  body TEXT NOT NULL,
  associated_author INTEGER,
  FOREIGN KEY(associated_author) REFERENCES users(id)
);

CREATE TABLE question_follows(
  id INTEGER PRIMARY KEY,
  user_id INTEGER,
  question_id INTEGER,
  FOREIGN KEY(user_id) REFERENCES users(id),
  FOREIGN KEY(question_id) REFERENCES questions(id)
);

CREATE TABLE replies(
  id INTEGER PRIMARY KEY,
  question_id INTEGER NOT NULL,
  parent_id INTEGER,
  user_id INTEGER NOT NULL,
  body TEXT NOT NULL,
  FOREIGN KEY(user_id) REFERENCES users(id),
  FOREIGN KEY(parent_id) REFERENCES replies(id),
  FOREIGN KEY(question_id) REFERENCES questions(id)
);

CREATE TABLE question_likes(
  id INTEGER PRIMARY KEY,
  user_id INTEGER NOT NULL,    
  question_id INTEGER NOT NULL,
  FOREIGN KEY(user_id) REFERENCES users(id),
  FOREIGN KEY(question_id) REFERENCES questions(id)
);

INSERT INTO
    users (fname, lname)
VALUES
    ('April', 'Graves'),
    ('Brad', 'Barnes'),
    ('Charles', 'Mancuso'),
    ('Steven', 'Terry');

INSERT INTO
    questions (title, body, associated_author)
VALUES
    ('About Test', 'Can I get a free pass?', (SELECT id FROM users WHERE fname = 'Brad' AND lname = 'Barnes')),
    ('Hangry', 'When is dinner?', (SELECT id FROM users WHERE fname = 'April' AND lname = 'Graves')),
    ('Very Hangry', 'Where is the kitchen?', (SELECT id FROM users WHERE fname = 'April' AND lname = 'Graves'));


INSERT INTO
    question_follows (user_id, question_id)
VALUES
    ((SELECT id FROM users WHERE fname = 'April' AND lname = 'Graves'), (SELECT id FROM questions WHERE title = 'About Test')),
    ((SELECT id FROM users WHERE fname = 'Charles' AND lname = 'Mancuso'), (SELECT id FROM questions WHERE title = 'About Test')),
    ((SELECT id FROM users WHERE fname = 'Steven' AND lname = 'Terry'), (SELECT id FROM questions WHERE title = 'About Test')),
    ((SELECT id FROM users WHERE fname = 'Brad' AND lname = 'Barnes'), (SELECT id FROM questions WHERE title = 'Hangry')),
    ((SELECT id FROM users WHERE fname = 'Charles' AND lname = 'Mancuso'), (SELECT id FROM questions WHERE title = 'Hangry')),
    ((SELECT id FROM users WHERE fname = 'Charles' AND lname = 'Mancuso'), (SELECT id FROM questions WHERE title = 'Very Hangry'));


INSERT INTO
    replies (question_id, user_id, body, parent_id)
VALUES
    ((SELECT id FROM questions WHERE title = 'About Test'), (SELECT id FROM users WHERE fname = 'April' AND lname = 'Graves'), "Good luck with that!", NULL),
    ((SELECT ID FROM questions WHERE title = 'About Test'), (SELECT id FROM users WHERE fname = 'Brad' AND lname = 'Barnes'), "I asked and they kicked me out.", 1);

INSERT INTO
    question_likes(user_id, question_id)
VALUES
    ((SELECT id FROM users WHERE fname = 'April' AND lname = 'Graves'), (SELECT id FROM questions WHERE title = 'About Test')),
    ((SELECT id FROM users WHERE fname = 'Charles' AND lname = 'Mancuso'), (SELECT id FROM questions WHERE title = 'Hangry')),
    ((SELECT id FROM users WHERE fname = 'Brad' AND lname = 'Barnes'), (SELECT id FROM questions WHERE title = 'Very Hangry')),
    ((SELECT id FROM users WHERE fname = 'April' AND lname = 'Graves'), (SELECT id FROM questions WHERE title = 'Hangry'));




