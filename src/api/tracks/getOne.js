const { sqlDb } = require('../../db');

const getTrackById = (req, res) => {
  const id = parseInt(req.params.id);
  sqlDb.query(`select * from track where id= ? `, [id]).then(([trackById]) => {
    console.log(trackById);
    res.json(trackById[0]);
  });
};
module.exports = {
  getTrackById,
};
