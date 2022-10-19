const { checkpoint3 } = require('../../db');
module.exports = (req, res) => {
  const id = parseInt(req.params.id, 10);
  const { title, genre, picture, artist } = req.body;

  checkpoint3.query(
    "UPDATE album SET title = ?, genre = ?, picture = ?, artist = ? WHERE id = ?",
    [title, genre, picture, artist, id]
  )
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.status(404).json("not found");
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json("Error editing the album in database");
    });
};
