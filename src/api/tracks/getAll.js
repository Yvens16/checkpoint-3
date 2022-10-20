const { sqlDB } = require('../../../db');

module.exports = (req, res) => {
  sqlDB
    .query('select * from track')
    .then(([tracks]) => {
      res.status(200).json(tracks);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ message: 'error retrieving data from db' });
    });
};
