const { check3 } = require('../../bd');

module.exports = (req, res) => {
  check3
    .query(`SELECT * FROM track`)
    .then(([tracks]) => {
      res.json({ tracks });
    })
    .catch((err) => {
      res.status(500).send(`Error in gettrack : ${err}`);
    });
};
