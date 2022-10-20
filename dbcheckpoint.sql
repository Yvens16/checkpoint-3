DROP TABLE IF EXISTS album;

CREATE TABLE album(
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  title VARCHAR(255) NOT NULL,
  genre VARCHAR(255) NOT NULL,
  picture VARCHAR(255) NOT NULL,
  artist VARCHAR(255) NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = latin1;

DROP TABLE IF EXISTS track;

CREATE TABLE track(
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  title VARCHAR(128) NOT NULL,
  youtube_url VARCHAR(255) NOT NULL,
  id_album INT NOT NULL,
  CONSTRAINT fk_track_album FOREIGN KEY (id_album) REFERENCES album(id)
) ENGINE = InnoDB DEFAULT CHARSET = latin1;

-- INSERT INTO
--   album (title, genre, picture, artist)
-- VALUES
--   (
--     "firstTitle",
--     "firstgenre",
--     "firstPicture",
--     "firstArtist);
-- INSERT INTO track (id, title,youtube_url, id_album) VALUES ( " oneTrack ", " youtube_url1 ", 1)
-- INSERT INTO track (id, title,youtube_url, id_album) VALUES ( " twoTrack ", " youtube_url2 ", 1)