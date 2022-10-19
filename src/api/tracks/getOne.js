const { sqlDb } = require('../../db');

const getTrackById = (req, res) => {
  const id = parseInt(req.params.id);
  sqlDb
    .query(`select * from track where id= ? `, [id])
    .then(([trackById]) => {
      res.json(trackById);
    })
    .catch((err) => {
      res.status(500).json(`Error retrieving data from database : ${err}`);
    });
};
module.exports = {
  getTrackById,
};
