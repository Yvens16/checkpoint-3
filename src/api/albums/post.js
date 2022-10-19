const { checkpoint3 } = require('../../db');
module.exports = (req, res) => {
  const { title, genre, picture, artist } = req.body;

  checkpoint3.query(
    "INSERT INTO album(title, genre, picture, artist) VALUES (?, ?, ?, ?)",
    [title, genre, picture, artist]
  )
    .then(([result]) => {
      res.location(`/album/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      res.status(409).json(`Error in createAlbum ${err}`);
    });
};

