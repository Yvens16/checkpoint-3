CREATE TABLE album(
  `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(255) NOT NULL,
  `genre` VARCHAR(255),
  `picture` VARCHAR(255),
  `artist` VARCHAR(255)
);

CREATE TABLE track(
  `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(128) NOT NULL,
  `youtube_url` VARCHAR(255),
  `id_album` INT,
  CONSTRAINT fk_track_album
  FOREIGN KEY (id_album)
  REFERENCES album(id)
);