const { sqldb } = require('../../../db');
module.exports = (req, res) => {
  // your code here !
  sqldb
    .query('DELETE FROM track WHERE track.id = ?', [req.params.id])
    .then(([track]) => {
      if (track.affectedRows === 0) {
        res.status(404).send("don't exist");
      } else {
        res.status(204).json({ message: '204 no content' });
      }
    });
};
