const { check3 } = require('../../bd');

module.exports = (req, res) => {
  const { id } = parseInt(req.params.id);
  check3
    .query(`SELECT * FROM track WHERE id = ?`, [id])
    .then(([track]) => {
      res.json(track[0]);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Error retrieving from database');
    });
};
