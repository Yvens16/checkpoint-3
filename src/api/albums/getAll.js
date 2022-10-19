const database = require('../../db');

module.exports = (_, res) => {
  let sql = 'select * from album';

  database
    .query(sql)
    .then(([albums]) => {
      res.json(albums);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Error retrieving data from database');
    });
};
