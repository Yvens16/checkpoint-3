const { sqlDb } = require('../../db');

const updateAlbum = (req, res) => {
  const id = parseInt(req.params.id);
  const { title, genre, picture, artist } = req.body;

  sqlDb
    .query(
      'update album set title = ?, genre = ?, picture = ?, artist = ? where id = ?',
      [title, genre, picture, artist, id]
    )
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.status(404).json('Not Found');
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      res.status(500).json(`Error editing the album : ${err}`);
    });
};

module.exports = {
  updateAlbum,
};
