const { albumKeys } = require("../../../test/testsData");
const { mydb } = require("../../../db");

 module.exports =(req, res) => {
  // your code here ! 
  const { id } = req.params;
  
  mydb
  .query(`SELECT * FROM album WHERE id = ?`, [id])
  .then(([album]) => {
    if (!album[0]) {
      return res.sendStatus(404);
    }
    res.status(200).json(album[0]);
  })
  .catch((err) => {
    console.error(err);
      res.status(500).send("Error");
  });
};
