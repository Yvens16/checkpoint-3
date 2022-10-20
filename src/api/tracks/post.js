const {trackKeys}= require("../../../test/testsData");
const { mydb } = require("../../../db");

module.exports =(req, res) => {
  // your code here !
  const { title, youtube_url, id_album } = req.body;

  mydb
  
  .query(`INSERT INTO track (title, youtube_url, id_album) VALUE (?, ?, ?)`,
  [title, youtube_url, id_album])
 
  .then(([result]) => {
    if (result.affectedRows === 0) {
      return false;
    }else{
    return result.insertId;
  }
})
  .then((insertId) => {
    
    mydb
      .query(`SELECT * FROM track WHERE id = ?`,[insertId])
      .then(([track]) => res.status(201).json(track[0]))
      .catch((err) => {
        console.error(err);
        res.status(500).send('Error');
      });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Error in post track query');
    });
  };
