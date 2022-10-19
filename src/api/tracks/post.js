const { DB } = require('../../DB');

const postTrack = (req, res) => {
  const { title, youtubeUrl, idAlbum } = req.body;

  DB.query('INSERT INTO track(title, youtube_url, id_album) VALUES (?, ?, ?)', [
    title,
    youtubeUrl,
    idAlbum,
  ])
    .then(([result]) => {
      res.location(`/track/${result.insertId}`).sendStatus(200);
    })
    .catch((err) => {
      res.status(500).send(`Error in createTrack ${err}`);
    });
};

module.exports = { postTrack };
