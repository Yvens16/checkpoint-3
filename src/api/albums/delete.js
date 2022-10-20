const { sqlDb } = require('../../db');

const deleteAlbum = (req, res) => {
  const { id } = req.params;
  sqlDb
    .query('delete from album where id = ?', [id])
    .then(() => res.sendStatus(204))
    .catch((err) => {
      console.error(err);
      res.status(500).send('Error in delete album query');
    });
};

module.exports = {
  deleteAlbum,
};
