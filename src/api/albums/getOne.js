const { check3 } = require('../bd');

const getAlbumById = (req, res) => {
  const id = parseInt(req.params.id);
  check3
    .query('SELECT * FROM album WHERE id = ?, [id]')
    .then(([albumById]) => {
      res.json(albumById);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Error retrieving from database');
    });
};

module.exports = {
  getAlbumById,
};
