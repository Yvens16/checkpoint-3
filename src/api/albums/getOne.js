const { sqlDb } = require('../../../Db');

module.exports = (req, res) => {
  const id = parseInt(req.params.id);
  sqlDb
    .query(`SELECT * from album WHERE id= ?`, [id])
    .then(([result]) => {
      if (result.length === 0) {
        res.status(404);
      }
      res.json(result[0]);
    })
    .catch((err) => {
      res.status(500).send(`Error in getAlbumOne : ${err}`);
    });
};
