const { check3 } = require('../../bd');

module.exports = (req, res) => {
  const { title, genre, picture, artist } = req.body;

  check3
    .query(
      `INSERT INTO album( title, genre, picture, artist ) VALUES ( ?, ?, ?, ?)`,
      [title, genre, picture, artist]
    )
    .then(([result]) => {
      res.location(`/album/${result.insertId}`).sendStatus(200);
    })
    .catch((err) => {
      res.status(500).send(`Error in createAlbum ${err}`);
    });
};
