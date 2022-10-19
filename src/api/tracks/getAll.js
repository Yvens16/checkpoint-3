const database = require('../../db');

module.exports = (_, res) => {
  let sql = 'select * from track';

  database
    .query(sql)
    .then(([tracks]) => {
      res.json(tracks);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Error retrieving data from database');
    });
};
