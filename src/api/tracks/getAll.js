const { checkpoint3 } = require('../../db');

module.exports = (req, res) => {
  checkpoint3.query("SELECT * FROM track")
  .then(([tracks]) => {
    res.json({tracks });
  })
  .catch((err) => {
    res.status(500).json(`Erreur dans la requête getTrack: ${err}`);
  });
};
