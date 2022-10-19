const { DB } = require('../../DB');

const updateAlbum = (req, res) => {
  const id = parseInt(req.params.id, 10);
  const { title, genre, picture, artist } = req.body;

  DB.query(
    'UPDATE album SET title = ?, genre = ?, picture = ?, artist = ? WHERE id = ?',
    [title, genre, picture, artist, id]
  )
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.status(404).send('not found');
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Error editing the album in database');
    });
};

module.exports = { updateAlbum };
