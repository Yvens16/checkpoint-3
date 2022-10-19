const { sqlDb } = require('../../db');

const getAlbumById = (req, res) => {
  const id = parseInt(req.params.id);
  sqlDb
    .query(`select * from album where id= ? `, [id])
    .then(([albumById]) => {
      res.json(albumById);
    })
    .catch((err) => {
      res.status(500).json(`Error retrieving data from database: ${err}`);
    });
};

module.exports = {
  getAlbumById,
};
