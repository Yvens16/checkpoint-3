const { DB } = require('../../DB');

const postAlbum = (req, res) => {
  const { title, genre, picture, artist } = req.body;
  DB.query(
    'INSERT INTO album(title, genre, picture, artist) VALUES (?, ?, ?, ?)',
    [title, genre, picture, artist]
  )
    .then(([result]) => {
      res.location(`/album/${result.insertId}`).sendStatus(200);
    })
    .catch((err) => {
      console.warn(err);
      res.status(500).send(`Error in createAlbum ${err}`);
    });
};

module.exports = { postAlbum };
