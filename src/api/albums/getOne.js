const { sqlDb } = require('../../db');

const getAlbumById = (req, res) => {
  const id = parseInt(req.params.id);
  sqlDb.query(`select * from album where id= ? `, [id]).then(([albumById]) => {
    res.json(albumById);
  });
};

module.exports = {
  getAlbumById,
};
