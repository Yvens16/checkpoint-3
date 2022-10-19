const { mydb } = require('../../Cp3');

module.exports = (req, res) => {
  const id = parseInt(req.params.id);
  mydb
    .query(`SELECT * FROM album where id = ?`, [id])
    .then(([albumById]) => {
      res.json(albumById);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Error retrieving from database');
    });
};
