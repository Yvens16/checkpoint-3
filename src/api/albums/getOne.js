const { sqlDb } = require('../../db');

const getAlbumById = (req, res) => {
  const { id } = req.params;
  sqlDb
    .query(`select * from album where id= ? `, [id])
    .then(([albumById]) => {
      if (!albumById[0]) {
        return res.status(404);
      }
      res.status(200).json(albumById[0]);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Eroor in getOne album query');
    });
};

module.exports = {
  getAlbumById,
};
