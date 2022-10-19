const { DB } = require('../../DB');

const getTracksFromAlbum = (req, res) => {
  const idAlbum = parseInt(req.params.id_album, 10);
  DB.query('SELECT * FROM track WHERE id_album = ?', [idAlbum])
    .then(([trackById]) => {
      res.json(trackById);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Error retrieving from database');
    });
};

module.exports = { getTracksFromAlbum };
