const { mydb } = require('../../Cp3');
module.exports = (req, res) => {
  const id = parseInt(req.params.id);
  mydb
    .query(`SELECT * FROM track where id = ?`, [id])
    .then(([track]) => {
      if (!track[0]) {
        return res.sendStatus(404);
      }
      res.status(200).json(track[0]);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Error retrieving from database');
    });
};
