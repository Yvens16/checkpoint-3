const { db } = require("../../../db")

module.exports = (req, res) => {
  // your code here !
  db
    .query("SELECT * FROM album")
    .then(([result])=>{
        res.json(result);
    })
    .catch((err) => {
        res.status(500).send(`Error in getAlbum : ${err}`);
    });
};
