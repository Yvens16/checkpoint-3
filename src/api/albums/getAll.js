const { mydb } = require('../../Cp3');

module.exports = (req, res) => {
  mydb
    .query('SELECT * FROM album')
    .then(([albums]) => {
      res.status(200).json(albums);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};
