/* eslint-disable no-unused-vars */
const { check3 } = require('../bd');
const getTracksFromAlbum = (req, res) => {
  const id_album = parseInt(req.params.id_album);
  check3
    .query(`SELECT * FROM track WHERE id_album = ?, [id_album]`)
    .then(([trackById]) => {
      res.json(trackById);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Error retrieving from database');
    });
};

module.exports = {
  getTracksFromAlbum,
};
