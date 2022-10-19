const { DB } = require('../../DB');

const getOneAlbum = (req, res) => {
  const id = parseInt(req.params.id, 10);
  DB.query('SELECT * FROM album WHERE id = ?', [id])
    .then(([albumById]) => {
      res.json(albumById);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Error retrieving from database');
    });
};

module.exports = { getOneAlbum };
