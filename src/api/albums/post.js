const { mydb } = require('../../Cp3');

module.exports = (req, res) => {
  const { title, genre, picture, artist } = req.body;

  mydb

    .query(
      `INSERT INTO album (title, genre, picture, artist) VALUES (?, ?, ?, ?)`,
      [title, genre, picture, artist]
    )
    .then(([result]) => {
      res.location(`/album/${result.insertId}`).sendStatus(200);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send('error');
    });
};
