const database = require('../../database');
module.exports = (req, res) => {
  const { id } = req.params;
  const { title, genre, picture, artist } = req.body;

  database
    .query(
      `
   update album set title = ?, genre = ?, picture = ?, artist = ? where id = ?
  `,
      [title, genre, picture, artist, id]
    )
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Error in update album query');
    });
};
