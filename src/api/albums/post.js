const { sqlDB } = require('../../../db');

module.exports = (req, res) => {
  const { title, genre, picture, artist } = req.body;

  sqlDB
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
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ message: 'Error posting the album' });
    });
};
