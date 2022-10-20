const { sqlDB } = require('../../../db');

module.exports = (req, res) => {
  sqlDB
    .query('select * from album')
    .then(([albums]) => {
      res.status(200).json(albums);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ message: 'error retrieving data from db' });
    });
};
