DROP TABLE IF EXISTS track;
DROP TABLE IF EXISTS album;

CREATE TABLE album
(
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    title VARCHAR(255),
    genre VARCHAR(255),
    picture VARCHAR(255),
    artist VARCHAR(255)
);

CREATE TABLE track
(
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    title VARCHAR(128),
    youtube_url VARCHAR(255),
    id_album INT NOT NULL,
    FOREIGN KEY (id_album) REFERENCES album(id)
);

