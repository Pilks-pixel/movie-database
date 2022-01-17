DROP TABLE IF EXISTS movies;

CREATE TABLE movies (
    id serial PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    actor VARCHAR(100) NOT NULL,
    production_year int
);

INSERT INTO movies (title, actor, production_year)
VALUES
(
    'Die Hard',
    'Bruce Willis',
    1990
),
(
    'Jaws',
    'Shark',
    1978
),
(
    'Notting Hill',
    'Hue Grant',
    2000
),
(
    'Gladiator',
    'Russel Crowe',
    1999
),
(
    'Indiana Jones',
    'Harrison Ford',
    1982
),
(
    'Star Wars',
    'Mark Hamill',
    1974
)