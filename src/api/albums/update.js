const { sqlDB } = require('../../../db');

module.exports = (req, res) => {
  const { id } = req.params;
  const { title, genre, picture, artist } = req.body;
  sqlDB
    .query(
      `UPDATE album SET title=?, genre=?, picture=?, artist=? WHERE id = ?`,
      [title, genre, picture, artist, id]
    )
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.status(404).send('Not Found');
      } else {
        res.status(204).json({
          id,
          title,
          genre,
          picture,
          artist,
        });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: 'Error updating the album' });
    });
};
