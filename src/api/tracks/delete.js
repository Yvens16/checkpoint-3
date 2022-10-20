const {trackKeys}= require("../../../test/testsData");
const { mydb } = require("../../../db");

 module.exports =(req, res) => {
  // your code here !
  const { id } = req.params;

  mydb
    .query(`DELETE FROM track WHERE id = ?`,[id])
    .then(() => res.sendStatus(204))
    .catch((err) => res.status(500).json(err));
};
