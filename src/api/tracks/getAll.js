const { sqlDb } = require('../../db');

const getTrack = (req, res) => {
  sqlDb
    .query('select * from track')
    .then(([result]) => {
      res.json({ result });
    })
    .catch((err) => {
      res.status(500).json(`Erreur dans la requête getTrack: ${err}`);
    });
};

module.exports = {
  getTrack,
};
