const { db } = require("../../../db")

module.exports = (req, res) => {
  // your code here !
  const id = parseInt(req.params.id);
  const { title, youtube_url, id_album} = req.body;

  db
  .query(`UPDATE track set title = ?, youtube_url = ?, id_album = ? WHERE id = ?`, [title, youtube_url, id_album, id])
  .then(([result]) => {
      if (result.affectedRows === 0) {
      res.status(404).send("not found");
      } else {
          res.sendStatus(204);
      }
  })
  .catch((err) =>{
      console.error(err);
      res.status(500).send("Error editing the track in database");
  });
};
