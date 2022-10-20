const {trackKeys}= require("../../../test/testsData");
const { mydb } = require("../../../db");

module.exports =(req, res) => {
  // your code here !
  const {id} = req.params;
  mydb
  .query(`SELECT * FROM track where id = ?`, [id])
  .then(([track]) => {
    if(!track[0]){
      return res.sendStatus(404)
    }else{
      res.status(200).json(track[0]);
  }
})
  .catch((err) =>{
      console.error(err);
      res.status(500).send("Error retrieving from database");
  });
};
 