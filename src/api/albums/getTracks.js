const { mydb } = require('../../Cp3');
module.exports = (req, res) => {
  const id_album = req.params.id_album;
  mydb
    .query(
      `SELECT * FROM track INNER JOIN album ON album.id= track.id_album WHERE id_album = ?`,
      [id_album]
    )
    .then(([tracks]) => res.status(200).json(tracks))
    .catch((err) => {
      console.error(err);
      res.status(500).send('Error get tracks from album');
    });
};
