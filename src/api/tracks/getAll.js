const { sqlDb } = require('../../../Db');

module.exports = (req, res) => {
  sqlDb
    .query('SELECT * FROM track')
    .then(([result]) => {
      res.json(result);
    })
    .catch((err) => {
      res.status(500).send(`Error in getTrack : ${err}`);
    });
};
