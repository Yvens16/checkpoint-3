const {trackKeys}= require("../../../test/testsData");
const { mydb } = require("../../../db");

module.exports =(req, res) => {
  // your code here !
  const id = parseInt(req.params.id);
  mydb
  .query(`SELECT * FROM track where id = ?`, [id])
  .then(([trackById]) => {
      res.json(trackById);
  })
  .catch((err) =>{
      console.error(err);
      res.status(500).send("Error retrieving from database");
  });
};
 