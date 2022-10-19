const { albumKeys } = require("../../../test/testsData");
const { mydb } = require("../../../db");

module.exports = (req, res) => {
  // your code here !
  const album_id = req.params.album_id;
  mydb
  .query(`SELECT * FROM track INNER JOIN album ON album.id= track.album_id WHERE album_id = ?`, [album_id])
  .then(([trackById]) => {
      res.json(trackById);
  })
  .catch((err) =>{
      console.error(err);
      res.status(500).send("Error retrieving from database");
  });
};
