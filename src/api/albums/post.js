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
    .then(() => res.sendStatus(201))
    .catch((err) => {
      console.error(err);
      res.status(500).send('Error in post album query');
    });
};
