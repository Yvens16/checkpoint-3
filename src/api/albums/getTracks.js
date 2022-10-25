const { sqlDb } = require('../../../db');

module.exports = (req, res) => {
  const id_album = parseInt(req.params.id);
  sqlDb
    .query(`SELECT * FROM track WHERE id_album = ?`, [id_album])
    .then(([albumById]) => {
      res.json(albumById);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json('Error retrieving from database');
    });
};
