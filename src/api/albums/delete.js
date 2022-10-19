const { db } = require("../../../db")


module.exports = (req, res) => {
  // your code here !
  const id = parseInt(req.params.id);

  db
  .query(`DELETE FROM album WHERE id = ?`, [id])
  .then(([result]) => {
      if (result.affectedRows === 0) {
      res.status(404).json("album not found in db to delete");
      } else {
        res.status(204).json(`album : ${id} deleted successfully`);
      }
  })
  .catch((err) =>{
      console.error(err);
      res.status(500).json(`Album : ${id} not deleted`);
  });
};

