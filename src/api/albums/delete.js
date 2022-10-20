const { sqlDB } = require('../../../db');

module.exports = (req, res) => {
  const { id } = req.params;
  sqlDB
    .query('DELETE FROM album WHERE album.id = ?', [id])
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.status(404).send('Not Found');
      } else {
        res
          .status(204)
          .json({ message: 'Album has been successfully deleted' });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send('Error deleting your album');
    });
};
