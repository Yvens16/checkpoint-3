const { DB } = require('../../DB');

const updateTrack = (req, res) => {
  const { title, youtubeUrl, idAlbum } = req.body;

  DB.query('UPDATE track SET title = ?, youtube_url = ? WHERE id_album = ?', [
    title,
    youtubeUrl,
    idAlbum,
  ])
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

module.exports = { updateTrack };
