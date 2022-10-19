const {trackKeys}= require("../../../test/testsData");
const { mydb } = require("../../../db");

module.exports =(req, res) => {
  // your code here !
  const { title, youtube_url, album_id} = req.body;

  mydb
  
  .query(`INSERT INTO track (title, youtube_url, album_id) VALUES (?, ?, ?)`,
  [title, youtube_url, album_id])
  .then(([result]) =>{
      res.location(`/track/${result.insertId}`).sendStatus(201);
  })
  .catch(() => {
            res.status(500).send("error")
  });
};
