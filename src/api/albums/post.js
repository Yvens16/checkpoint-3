const { albumKeys } = require("../../../test/testsData");
const { mydb } = require("../../../db");

 module.exports = (req, res) => {
  // your code here !
  const { title, genre, picture, artist} = req.body;

mydb

.query(`INSERT INTO album (title, genre, picture, artist) VALUES (?, ?, ?, ?)`,
[title, genre, picture, artist])
.then(([result]) => {
    if (result.affectedRows === 0) {
      return false;
    }
    return result.insertId;
  })
  .then((insertId) => {
    mydb
      .query(`SELECT * FROM album WHERE id = ?`,
        [insertId]
      )
      .then(([album]) => res.status(201).json(album[0]))
      .catch((err) => {
        console.error(err);
        res.status(500).send('Error');
      });
  })
  .catch((err) => {
    console.error(err);
    res.status(500).send('Error');
  });
};