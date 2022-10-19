const {trackKeys}= require("../../../test/testsData");
const { mydb } = require("../../../db");

 module.exports =(req, res) => {
  // your code here !
  const albumId = parseInt(req.params.id);
  const { title, youtubeUrl} = req.body;

  mydb
  .query(`UPDATE track set title = ?, youtube_url = ?, album_id=? WHERE id = ?`, [title, youtubeUrl, albumId])
  .then(([result]) => {
      if (result.affectedRows === 0) {
      res.status(404).send("not found");
      } else {
          res.sendStatus(204);
      }
  })
  .catch((err) =>{
      console.error(err);
      res.status(500).send("Error editing the album in database");
  });
};
