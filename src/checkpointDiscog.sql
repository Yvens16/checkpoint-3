DROP TABLE
  IF EXISTS `track`;

DROP TABLE
  IF EXISTS `album`;

CREATE TABLE
  IF NOT EXISTS `album` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(255) NOT NULL,
    `genre` VARCHAR(255) NOT NULL,
    `picture` VARCHAR(255) NOT NULL,
    `artist` VARCHAR(255) NOT NULL,
    PRIMARY KEY (`id`)
  ) ENGINE = InnoDB;

CREATE TABLE
  IF NOT EXISTS `track` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(128) NOT NULL,
    `youtube_url` VARCHAR(255) NOT NULL,
    `id_album` INT NOT NULL,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`id_album`) REFERENCES `album` (`id`)
  ) ENGINE = InnoDB;

INSERT INTO
  album (`title`, `genre`, `picture`, `artist`)
VALUES
  (
    'test title',
    'test genre',
    'test picture',
    'test artist'
  );

INSERT INTO
  track (`title`, `youtube_url`, `id_album`)
VALUES
  ('test title', 'test youtube_url', 1);