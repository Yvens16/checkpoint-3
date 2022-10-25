const { sqlDb } = require('../../../Db');

module.exports = (req, res) => {
  const { title, genre, picture, artist } = req.body;

  sqlDb
    .query(
      'INSERT INTO album (title, genre, picture, artist) VALUES (?,?,?,?)',
      [title, genre, picture, artist]
    )
    .then(([result]) => {
      res.json(`${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      res.status(500).send(`Error in post album: ${err}`);
    });
};
