const { sqlDb } = require('../../db');

const getTrack = (req, res) => {
  sqlDb.query('select * from track').then(([result]) => {
    res.json(result);
  });
};

module.exports = {
  getTrack,
};
