const { sqldb } = require('../../../db');
module.exports = (req, res) => {
  // your code here !
  let { id } = req.params;
  sqldb.query('DELETE FROM album WHERE id = ?', [id]).then((album) => {
    if (album[0].affectedRows === 0) {
      res.status(404).send("don't exist");
    } else {
      res.sendStatus(204);
    }
  });
};
