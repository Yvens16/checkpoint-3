const { sqlDB } = require('../../../db');

module.exports = (req, res) => {
  const { id } = req.params;
  const { title, youtube_url, id_album } = req.body;
  sqlDB
    .query(
      `UPDATE track SET title= ?, youtube_url= ?, id_album= ? WHERE id = ?`,
      [title, youtube_url, id_album, id]
    )
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.status(404).send('Not Found');
      } else {
        res.status(204).json({
          id,
          title,
          id_album,
        });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: 'Error updating the track' });
    });
};
