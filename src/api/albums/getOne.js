const { sqldb } = require('../../../db');
module.exports = (req, res) => {
  // your code here !
  sqldb
    .query('SELECT * FROM album WHERE id = ?', [req.params.id])
    .then(([oneAlbum]) => {
      if (oneAlbum[0] != null) {
        res.json(oneAlbum[0]);
      } else {
        res.status(404).send("don't exist");
      }
    });
};
