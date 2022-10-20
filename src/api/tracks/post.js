const { sqlDB } = require('../../../db');

module.exports = (req, res) => {
  const { title, youtube_url, id_album } = req.body;

  sqlDB
    .query('INSERT INTO track(title, youtube_url, id_album) VALUES (?, ?, ?)', [
      title,
      youtube_url,
      id_album,
    ])
    .then(([result]) => {
      res.status(201).json({
        title: title,
        youtube_url: youtube_url,
        id_album: id_album,
        id: result.insertId,
      });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ message: 'Error posting the track' });
    });
};
