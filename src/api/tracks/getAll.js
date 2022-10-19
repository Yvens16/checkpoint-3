const {trackKeys}= require("../../../test/testsData");
const { mydb } = require("../../../db");

 module.exports =(req, res) => {
  // your code here !
  mydb
  .query('SELECT * FROM track')
  .then(([title, youtube_url, album_id])=>{
      res.json({titre:title, youtube_url:youtube_url, album_id:album_id})
})

};
