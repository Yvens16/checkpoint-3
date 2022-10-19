const { sqlDb } = require('../../../db');

const getAll = (req, res) => {
  sqlDb
    .query('select * from album')
    .then(([result]) => {
      res.json(result);
    })
    .catch((err) => {
      res.status(500).send(`Erreur dans la requête getAlbum: ${err}`);
    });
};

module.exports = {
  getAll,
};
