const { albumKeys } = require("../../../test/testsData");
const { mydb } = require("../../../db");

 module.exports =(req, res) => {
  // your code here ! 
  const id = parseInt(req.params.id);
  
  mydb
  .query(`SELECT * FROM album where id = ?`, [id])
  .then(([albumById]) => {
      res.json(albumById);
  })
  .catch((err) =>{
      console.error(err);
      res.status(500).send("Error retrieving from database");
  });
};
