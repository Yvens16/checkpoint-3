const { sqlDb } = require('../../../db');

const getTracks = (req, res) => {
  const id_album = parseInt(req.params.id);
  sqlDb
    .query(`select * from track where id_album= ? `, [id_album])
    .then(([result]) => {
      res.json(result);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Error retrieving data from database');
    });
};

module.exports = {
  getTracks,
};
