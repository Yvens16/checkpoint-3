const { sqldb } = require('../../../db');
module.exports = (req, res) => {
  // your code here !
  let { id } = req.params;
  id = parseInt(id, 10);
  sqldb
    .query('SELECT * FROM track WHERE id_album = ?', [id])
    .then(([allTracksAlbum]) => {
      res.json(allTracksAlbum);
    });
};
