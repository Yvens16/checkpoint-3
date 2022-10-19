const { DB } = require('../../DB');

const getOneTrack = (req, res) => {
  const id = parseInt(req.params.id, 10);
  DB.query('SELECT * FROM track WHERE id = ?', [id])
    .then(([trackById]) => {
      res.json(trackById);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Error retrieving from database');
    });
};

module.exports = { getOneTrack };
