const { sqldb } = require('../../../db');
module.exports = (req, res) => {
  // your code here !
  const { title, genre, picture, artist } = req.body;
  let { id } = req.params;
  id = parseInt(id, 10);
  sqldb
    .query(
      'UPDATE album SET title = ?, genre = ?, picture = ?, artist = ? WHERE album.id = ?',
      [title, genre, picture, artist, id]
    )
    .then(([album]) => {
      if (album.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    });
};
