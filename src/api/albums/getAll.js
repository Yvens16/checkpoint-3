const { checkpoint3 } = require('../../db');
module.exports = (req, res) => {
  checkpoint3.query("SELECT * FROM album")
    .then(([result]) => {
      res.json({ result });
    })
    .catch((err) => {
      res.status(500).json(`Erreur dans la requête getAlbum: ${err}`);
    });
};
