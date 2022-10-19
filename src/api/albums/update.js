const { albumKeys } = require("../../../test/testsData");
const { mydb } = require("../../../db");

module.exports =(req, res) => {
  // your code here !
  const albumId = parseInt(req.params.albumId);
    const { title, genre, picture, artist} = req.body;

    mydb
    .query(`UPDATE album set title = ?, genre = ?, picture = ?, artist = ? WHERE id = ?`, [title, genre, picture, artist, albumId])
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
