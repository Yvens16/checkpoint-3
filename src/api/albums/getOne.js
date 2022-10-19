const { checkpoint3 } = require('../../db');
module.exports = (req, res) => {
    const id = parseInt(req.params.id, 10);
  checkpoint3.query("SELECT * FROM album WHERE id = ?", [id])
    .then(([albumById]) => {
      res.json(albumById);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json("Error retrieving from database");
    });
};

