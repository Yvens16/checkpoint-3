const { check3 } = require('../../bd');

module.exports = (req, res) => {
  const { id } = parseInt(req.params.id);
  check3
    .query(`SELECT * FROM album WHERE id = ?`, [id])
    .then(([album]) => {
      res.json(album[0]);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Error retrieving from database');
    });
};
