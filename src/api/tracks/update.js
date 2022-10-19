const { check3 } = require('../../bd');
module.exports = (req, res) => {
  const { id } = req.params;
  const { title, youtube_url, id_album } = req.body;

  check3
    .query(
      `
     update track set title = ?, youtube_url = ?, id_album = ? where id = ?
    `,
      [title, youtube_url, id_album, id]
    )
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Error in update track query');
    });
};
