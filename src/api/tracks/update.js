const { mydb } = require('../../Cp3');

module.exports = (req, res) => {
  const idAlbum = parseInt(req.params.id);
  const { title, youtubeUrl } = req.body;

  mydb
    .query(
      `UPDATE track set title = ?, youtube_url = ?, album_id=? WHERE id = ?`,
      [title, youtubeUrl, idAlbum]
    )
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.status(404).send('not found');
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Error editing the album in database');
    });
};
