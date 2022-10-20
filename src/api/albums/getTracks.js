const { albumKeys } = require("../../../test/testsData");
const { mydb } = require("../../../db");

module.exports = (req, res) => {
  // your code here !
  const id_album = req.params.id_album;
  mydb
  .query(`SELECT * FROM track INNER JOIN album ON album.id= track.id_album WHERE id_album = ?`, [id_album])
  .then(([trackById]) => {
      res.json(trackById);
  })
  .catch((err) =>{
      console.error(err);
      res.status(500).send("Error retrieving from database");
  });
};
