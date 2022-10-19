const { sqlDb } = require('../../../db');

const getAll = (req, res) => {
  sqlDb
    .query(`select * from track`)
    .then(([result]) => {
      res.send(result);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Error retrieving data from database');
    });
};

module.exports = {
  getAll,
};
