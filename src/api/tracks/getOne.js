const { sqlDb } = require('../../../Db');

module.exports = (req, res) => {
  const id = parseInt(req.params.id);
  sqlDb
    .query(`SELECT * from track WHERE id= ?`, [id])
    .then(([trackById]) => {
      res.json(trackById[0]);
    })
    .catch((err) => {
      res.status(500).send(`Error in getTrackOne : ${err}`);
    });
};
