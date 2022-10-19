const database = require('../../database');
module.exports = (req, res) => {
  const { title, youtube_url, id_album } = req.body;

  database
    .query(
      `
      insert into track (title, youtube_url, id_album) value (?, ?, ?)
  `,
      [title, youtube_url, id_album]
    )
    .then(([result]) => {
      if (result.affectedRows === 0) {
        return false;
      }
      return result.insertId;
    })
    .then((insertId) => {
      database
        .query(
          `
        select * from track where id = ?
      `,
          [insertId]
        )
        .then(([track]) => res.status(201).json(track[0]))
        .catch((err) => {
          console.error(err);
          res.status(500).send('Error in getTrack after post track query');
        });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Error in post track query');
    });
};
