const {checkpoint3 } = require('../../db');
module.exports = (req, res) => {
  const idAlbum = parseInt(req.params.id_album, 10);
  checkpoint3.query("SELECT * FROM track WHERE id_album = ?", [idAlbum])
    .then(([trackById]) => {
      res.json(trackById);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json("Error retrieving from database");
    })
};
