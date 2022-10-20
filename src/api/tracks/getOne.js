const { sqldb } = require('../../../db');
module.exports = (req, res) => {
  // your code here !
  sqldb
    .query('SELECT * FROM track WHERE id = ?', [req.params.id])
    .then(([oneTrack]) => {
      if (oneTrack[0] != null) {
        res.json(oneTrack[0]);
      } else {
        res.status(404).send("don't exist");
      }
    });
};