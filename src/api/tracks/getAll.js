const { DB } = require('../../DB');

const getAllTrack = (req, res) => {
  DB.query('SELECT * FROM track')
    .then(([result]) => {
      res.json({ result });
    })
    .catch((err) => {
      res.status(500).send(`Erreur dans la requête getTrack: ${err}`);
    });
};

module.exports = { getAllTrack };
