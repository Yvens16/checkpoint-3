const { sqlDb } = require('../../db');

const postCreateTrack = (req, res) => {
  const { title, youtube_url, id_album } = req.body;

  sqlDb
    .query(
      'INSERT INTO track(title, youtube_url, id_album) VALUES ( ?, ?, ?)',
      [title, youtube_url, id_album]
    )
    .then(([result]) => {
      return result.insertId;
    })
    .then((insertId) => {
      sqlDb
        .query(`select * from track where id = ?`, [insertId])
        .then(([track]) => {
          res.status(201).json(track[0]);
        });
    });
};

module.exports = {
  postCreateTrack,
};
