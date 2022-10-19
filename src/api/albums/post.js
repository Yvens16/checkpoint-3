const { albumKeys } = require("../../../test/testsData");
const { mydb } = require("../../../db");

 module.exports = (req, res) => {
  // your code here !
  const { title, genre, picture, artist} = req.body;

mydb

.query(`INSERT INTO album (title, genre, picture, artist) VALUES (?, ?, ?, ?)`,
[title, genre, picture, artist])
.then(([result]) =>{
    res.location(`/album/${result.insertId}`).sendStatus(201);
})
.catch((error) => {
    console.error(error);
    res.status(500).send("error")
});
};
