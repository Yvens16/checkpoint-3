const { sqlDb } = require('../../../Db');

module.exports = (req, res) => {
  const id = parseInt(req.params.id);
  const { title, youtube_url, id_album } = req.body;

  sqlDb
    .query(
      `UPDATE track set title = ?, youtube_url = ?, id_album = ? WHERE id = ?`,
      [title, youtube_url, id_album, id]
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
