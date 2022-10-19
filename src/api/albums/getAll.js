const { sqlDb } = require('../../db');

const getAlbum = (req, res) => {
  sqlDb
    .query('select * from album')
    .then(([result]) => {
      res.json({ result });
    })
    .catch((err) => {
      res.status(500).json(`Erreur dans la requête getAlbum: ${err}`);
    });
};

module.exports = {
  getAlbum,
};
