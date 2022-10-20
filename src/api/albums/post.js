const { mydb } = require('../../Cp3');

module.exports = (req, res) => {
  const { title, genre, picture, artist } = req.body;

  mydb

    .query(
      `INSERT INTO album (title, genre, picture, artist) VALUES (?, ?, ?, ?)`,
      [title, genre, picture, artist]
    )
    .then(([result]) => {
      res.status(201).json({ title: title, genre: genre, picture: picture, artist: artist, id: result.insertId});    })
    .catch((error) => {
      console.error(error);
      res.status(500).send('error');
    });
};
