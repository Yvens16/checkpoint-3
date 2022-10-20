const { albumKeys } = require("../../../test/testsData");
const { mydb } = require("../../../db");

module.exports =(req, res) => {
  // your code here !
  const { id } = req.params;
  const { title, genre, picture, artist } = req.body;

    mydb
    .query(`UPDATE album SET title = ?, genre = ?, picture = ?, artist = ? WHERE id = ?`, [title, genre, picture, artist, id])
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
