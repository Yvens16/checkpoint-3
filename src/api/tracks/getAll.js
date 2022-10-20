const { sqldb } = require('../../../db');
module.exports = (req, res) => {
  // your code here !
  sqldb.query('SELECT * FROM track').then(([allTracks]) => res.json(allTracks));
};
