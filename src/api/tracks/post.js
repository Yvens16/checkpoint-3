const database = require('../../database');
module.exports = (req, res) => {
  const { title, youtubeUrl, idAlbum } = req.body;

  database
    .query('INSERT INTO track(title, youtube_url, id_album) VALUES (?, ?, ?)', [
      title,
      youtubeUrl,
      idAlbum,
    ])
    .then(() => {
      res.sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Error for post a track');
    });
};
