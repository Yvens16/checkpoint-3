const { sqldb } = require('../../../db');
module.exports = (req, res) => {
  // your code here !
  const { title } = req.body;
  let { id } = req.params;
  id = parseInt(id, 10);
  sqldb
    .query('UPDATE album SET title = ? WHERE album.id = ?', [title, id])
    .then(([album]) => {
      if (album.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    });
};
