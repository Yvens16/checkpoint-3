const database = require('../../database');
module.exports = (req, res) => {
  const { id } = req.params;

  database
    .query(
      `
    select * from track 
    inner join album on track.id_album = album.id
    where album.id = ?
  `,
      [id]
    )
    .then(([tracks]) => res.status(200).json(tracks))
    .catch((err) => {
      console.error(err);
      res.status(500).send('Error getTracks album query');
    });
};
