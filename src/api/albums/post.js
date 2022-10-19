const { sqlDb } = require('../../db');

const postCreateAlbum = (req, res) => {
  const { title, genre, picture, artist } = req.body;

  sqlDb
    .query(
      'INSERT INTO album(title, genre, picture, artist) VALUES ( ?, ?, ?, ?)',
      [title, genre, picture, artist]
    )
    .then(([result]) => {
      res.location(`/album/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      res.status(500).json(`Error in postAlbum ${err}`);
    });
};

module.exports = {
  postCreateAlbum,
};
