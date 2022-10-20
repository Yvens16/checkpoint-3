const { sqldb } = require('../../../db');

module.exports = (req, res) => {
  // your code here !
  const { title, genre, picture, artist } = req.body;
  sqldb
    .query(
      'INSERT INTO album ( title, genre, picture, artist ) VALUES (?, ?, ?, ?)',
      [title, genre, picture, artist]
    )
    .then(([results]) => {
      res.status(201).json({
        title: title,
        genre: genre,
        picture: picture,
        artist: artist,
        id: results.insertId,
      });
    });
};
