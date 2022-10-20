const { sqldb } = require('../../../db');
module.exports = (req, res) => {
  // your code here !
  const { id } = req.params;
  const { title } = req.body;
  sqldb
    .query('UPDATE track SET title = ? WHERE track.id = ?', [title, id])
    .then(([track]) => {
      if (track.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    });
};
