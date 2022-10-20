const database = require('../../database');

module.exports = (req, res) => {
  const { id } = req.params;

  database
    .query(
      `select * from track inner join album on album.id=track.id_album where album.id=?`,
      [id]
    )
    .then(([result]) => res.status(200).json(result))
    .catch((err) => res.status(500).json(err));
};
