const { sqlDb } = require('../../db');

const getTrackAlbumById = (req, res) => {
  const id_album = parseInt(req.params.id);
  sqlDb
    .query(`select * from track where id_album= ? `, [id_album])
    .then(([trackById]) => {
      res.json(trackById);
    });
};
module.exports = {
  getTrackAlbumById,
};
