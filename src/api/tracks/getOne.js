const { mydb } = require('../../Cp3');
module.exports = (req, res) => {
  const id = parseInt(req.params.id);
  mydb
    .query(`SELECT * FROM track where id = ?`, [id])
    .then(([trackById]) => {
      res.json(trackById);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Error retrieving from database');
    });
};
