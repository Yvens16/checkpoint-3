const { sqlDb } = require('../../db');

const getTrackById = (req, res) => {
  const { id } = req.params;
  sqlDb
    .query(`select * from track where id= ? `, [id])
    .then(([trackById]) => {
      if (!trackById[0]) {
        return res.status(404);
      }
      res.status(200).json(trackById[0]);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Eroor in getOne track query');
    });
};
module.exports = {
  getTrackById,
};
