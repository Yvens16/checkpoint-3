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
      if (result.affectedRows === 0) {
        return false;
      } else {
        return result.insertId;
      }
    })
    .then((insertId) => {
      sqlDB
        .query(`SELECT * FROM track WHERE id = ?`, [insertId])
        .then(([track]) => res.status(201).json(track[0]))
        .catch((err) => {
          console.error(err);
          res.status(500).send('Error');
        });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ message: 'Error posting the track' });
    });
};
