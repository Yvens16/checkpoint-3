const { check3 } = require('../../bd');

module.exports = (req, res) => {
  check3
    .query(`SELECT * FROM track`)
    .then(([result]) => {
      res.json({ result });
    })
    .catch((err) => {
      res.status(500).send(`Error in gettrack : ${err}`);
    });
};
