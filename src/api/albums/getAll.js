const { DB } = require('../../DB');

const getAlbums = (req, res) => {
  DB.query('SELECT * FROM album')
    .then(([result]) => {
      res.json({ result });
    })
    .catch((err) => {
      res.status(500).send(`Erreur dans la requête getAlbum: ${err}`);
    });
};

module.exports = { getAlbums };
