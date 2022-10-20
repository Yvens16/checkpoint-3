const database = require('../../database');

module.exports = (req, res) => {
  const { title, youtube_url } = req.body;

  database
    .query(
      `insert into track (title, youtube_url, id_album) values (?, ?, (select id from album order by id desc limit 1))`,
      [title, youtube_url]
    )
    .then(([result]) => {
      if (result.affectedRows === 0) {
        return false;
      } else {
        return result.insertId;
      }
    })
    .then((insertId) =>
      database
        .query(`select * from track where id=?`, [insertId])
        .then(([result]) => res.status(201).json(result[0]))
    )
    .catch((err) => res.status(500).json(err));
};
