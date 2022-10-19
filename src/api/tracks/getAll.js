const { mydb } = require('../../Cp3');

module.exports = (req, res) => {
  mydb
    .query('SELECT * FROM track')
    .then(([result]) => {
      res.json(result);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};
