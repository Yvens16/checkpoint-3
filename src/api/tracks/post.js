const { sqlDb } = require('../../db');

const postCreateTrack = (req, res) => {
  const { title, youtube_url, id_album } = req.body;

  sqlDb
    .query(
      'INSERT INTO track(title, youtube_url, id_album) VALUES ( ?, ?, ?)',
      [title, youtube_url, id_album]
    )
    .then(([result]) => {
      res.location(`/track/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      res.status(500).json(`Error in postTrack ${err}`);
    });
};

module.exports = {
  postCreateTrack,
};
