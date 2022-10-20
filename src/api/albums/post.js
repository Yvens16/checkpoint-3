const database = require('../../database');

module.exports = (req, res) => {
  const { title, genre, picture, artist } = req.body;

  database
    .query(
      `insert into album (title, genre, picture, artist) values (?, ?, ?, ?)`,
      [title, genre, picture, artist]
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
        .query(`select * from album where id=?`, [insertId])
        .then(([result]) => res.status(201).json(result[0]))
    )
    .catch((err) => res.status(500).json(err));
};
