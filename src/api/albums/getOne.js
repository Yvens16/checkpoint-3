const { sqlDb } = require('../../../db');

const getOne = (req, res) => {
  const id = parseInt(req.params.id);
  sqlDb
    .query(`select * from album where id= ? `, [id])
    .then(([results]) => {
      if (results.length === 0) {
        res.status(404);
      }
      res.json(results[0]);
    })
    .catch((err) => {
      res.status(500).send('Error retrieving data from database');
    });
};

module.exports = {
  getOne,
};
