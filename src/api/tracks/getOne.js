const { check3 } = require('../../bd');

module.exports = (req, res) => {
  const { id } = parseInt(req.params.id);
  check3
    .query(`SELECT * FROM track WHERE id = ?`, [id])
    .then(([trackById]) => {
      res.json(trackById);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Error retrieving from database');
    });
};
