const { db } = require("../../../db")

module.exports = (req, res) => {
  // your code here !
  const id = parseInt(req.params.id);
    db
    .query(`SELECT * FROM track WHERE id= ?`, [id])
    .then(([trackById]) => {
        res.json(trackById[0]);
    })
    .catch((err) =>{
        console.error(err);
        res.status(500).json("Error retrieving from database");
    });
};
