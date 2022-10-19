const { mydb } = require('../../Cp3');

module.exports = (req, res) => {
  const { title, youtubeUrl, idAlbum } = req.body;

  mydb
    .query(
      `INSERT INTO track (title, youtube_url, id_album) VALUES (?, ?, ?)`,
      [title, youtubeUrl, idAlbum]
    )
    .then(([result]) => {
      res.location(`/track/${result.insertId}`).sendStatus(201);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send('error');
    });
};
