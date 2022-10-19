const database = require('../../database');
module.exports = (req, res) => {
  const { title, genre, picture, artist } = req.body;

  database
    .query(
      `
      insert into album (title, genre, picture, artist) value (?, ?, ?, ?)
  `,
      [title, genre, picture, artist]
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
        select * from album where id = ?
      `,
          [insertId]
        )
        .then(([album]) => res.status(201).json(album[0]))
        .catch((err) => {
          console.error(err);
          res.status(500).send('Error in getAlbum after post album query');
        });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Error in post album query');
    });
};
