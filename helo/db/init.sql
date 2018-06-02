DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS user_profile;
DROP TABLE IF EXISTS posts;

CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    auth0_id TEXT UNIQUE,
    name TEXT,
    email TEXT,
    photo TEXT
);

CREATE TABLE IF NOT EXISTS user_profile (
    auth0_id TEXT UNIQUE,
    name TEXT,
    email TEXT,
    photo TEXT,
    repos TEXT,
    bio TEXT
);

CREATE TABLE IF NOT EXISTS posts (
    id SERIAL PRIMARY KEY,
    title TEXT,
    img TEXT,
    content text,
    user_id INT
)