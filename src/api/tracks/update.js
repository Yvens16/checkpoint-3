const { sqldb } = require('../../../db');
module.exports = (req, res) => {
  // your code here !
  const { trackid } = req.params;
  const { title, youtube_url, id_album } = req.body;
  sqldb
    .query(
      'UPDATE track SET title = ?, youtube_url = ?, id_album = ? WHERE track.id = ?',
      [title, youtube_url, id_album, trackid]
    )
    .then(([track]) => {
      if (track.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    });
};
