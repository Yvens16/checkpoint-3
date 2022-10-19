const { mydb } = require('../../Cp3');
module.exports = (req, res) => {
  const album_id = req.params.id_album;
  mydb
    .query(
      `SELECT * FROM track INNER JOIN album ON album.id= track.album_id WHERE album_id = ?`,
      [album_id]
    )
    .then(([trackById]) => {
      res.json(trackById);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Error retrieving from database');
    });
};
