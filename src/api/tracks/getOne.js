const {checkpoint3 } = require('../../db');
module.exports = (req, res) => {
  const id = parseInt(req.params.id, 10);
  checkpoint3.query("SELECT * FROM track WHERE id = ?", [id])
    .then(([trackById]) => {
      res.json(trackById);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json(`Error retrieving from database : ${err}`);
    });
};
