const { albumKeys } = require("../../../test/testsData");
const { mydb } = require("../../../db");

module.exports =(req, res) => {
  // your code here !
  const id = parseInt(req.params.id, 10);
    mydb
    .query("DELETE from album where id=?", [id])
    .then(([result]) => {
        if (result.affectedRows === 0) {
          res.status(404).json("Not found in db");
        } else {
          res.status(201).json(`album number: ${id} has been deleted`);
        }
      })
      .catch((err) => {
        res.status(500).json("error in delete action", err);
      });
};
 