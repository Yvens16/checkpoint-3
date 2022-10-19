const { sqlDb } = require('../../db');

const getTrackAlbumById = (req, res) => {
  const id_album = parseInt(req.params.id);
  sqlDb
    .query(`select * from track where id_album= ? `, [id_album])
    .then(([trackById]) => {
      res.json(trackById);
    })
    .catch((err) => {
      res.status(500).json(`Error retrieving data from database : ${err}`);
    });
};
module.exports = {
  getTrackAlbumById,
};
