const { sqlDb } = require('../../../Db');

module.exports = (req, res) => {
  const id = parseInt(req.params.id);
  const { title, genre, picture, artist } = req.body;

  sqlDb
    .query(
      `UPDATE album set title = ?, genre = ?, picture = ?, artist = ? WHERE id = ?`,
      [title, genre, picture, artist, id]
    )
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.status(404).send('Not found');
      } else {
        res.sendStatus(202);
      }
    })
    .catch((err) => {
      res.status(500).send(`Error in update track : ${err}`);
    });
};
