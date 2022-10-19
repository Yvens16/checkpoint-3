const { check3 } = require('../../bd');

module.exports = (req, res) => {
  const { title, youtube_url, id_album } = req.body;

  check3
    .query(
      `INSERT INTO track( title, youtube_url, id_album) VALUES ( ?, ?, ?)`,
      [title, youtube_url, id_album]
    )
    .then(([result]) => {
      res.location(`/track/${result.insertId}`).sendStatus(200);
    })
    .catch((err) => {
      res.status(500).send(`Error in createtrack ${err}`);
    });
};
