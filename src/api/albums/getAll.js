const database = require('../../database');

module.exports = (req, res) => {
  database
    .query(`select * from album`)
    .then(([result]) => res.status(200).json(result))
    .catch((err) => res.status(500).json(err));
};
