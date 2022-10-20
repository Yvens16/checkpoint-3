const { mydb } = require('../../Cp3');

module.exports = (req, res) => {
  const { id } = req.params;
  const { title, youtubeUrl, id_album } = req.body;

  mydb
    .query(
      `UPDATE track set title = ?, youtube_url = ?, id_album=? WHERE id = ?`,
      [title, youtubeUrl, id_album, id]
    )
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Error editing the album');
    });
};
