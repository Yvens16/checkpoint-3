const {trackKeys}= require("../../../test/testsData");
const { mydb } = require("../../../db");

 module.exports =(req, res) => {
  // your code here !
  const {id} = req.params;
  const { title, youtube_url, id_album} = req.body;

  mydb
  .query(`UPDATE track SET title = ?, youtube_url = ?, id_album=? WHERE id = ?`, [title, youtube_url, id_album, id])
  .then(([result]) => {
      if (result.affectedRows === 0) {
      res.sendStatus(404);
      } else {
          res.sendStatus(204);
      }
  })
  .catch((err) =>{
      console.error(err);
      res.status(500).send("Error");
  });
};
