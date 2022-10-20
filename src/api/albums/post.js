const { sqlDb } = require('../../db');

const postCreateAlbum = (req, res) => {
  const { title, genre, picture, artist } = req.body;

  sqlDb
    .query(
      'INSERT INTO album(title, genre, picture, artist) VALUES ( ?, ?, ?, ?)',
      [title, genre, picture, artist]
    )
    .then(([result]) => {
      res.status(201).json({
        title: title,
        genre: genre,
        picture: picture,
        artist: artist,
        id: result.insertId,
      });
    });
};

module.exports = {
  postCreateAlbum,
};
