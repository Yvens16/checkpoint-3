const { mydb } = require('../../Cp3');

module.exports = (req, res) => {
  mydb
    .query('SELECT * FROM track')
    .then(([tracks]) => res.status(200).json(tracks))
    .catch((err) => {
      res.status(500).send(err);
    });
};
