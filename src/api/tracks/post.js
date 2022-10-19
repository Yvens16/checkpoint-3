const { sqlDb } = require('../../../db');

const post = (req, res) => {
  const { title, youtube_url, id_album } = req.body;

  sqlDb
    .query(
      'INSERT INTO track (title, youtube_url, id_album) VALUES (?, ?, ?)',
      [title, youtube_url, id_album]
    )
    .then(([result]) => {
      res.status(201).json({
        title: title,
        youtube_url: youtube_url,
        id_album: id_album,
        id: result.insertId,
      });
    })
    .catch((err) => {
      res.status(500).send(`Error in postTrack ${err}`);
    });
};

module.exports = {
  post,
};
