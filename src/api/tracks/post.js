const database = require('../../database');
module.exports = (req, res) => {
  const { title, youtube_url, id_album } = req.body;

  database
    .query(
      `
      insert into track (title, youtube_url, id_album) value (?, ?, ?)
  `,
      [title, youtube_url, id_album]
    )
    .then(() => res.sendStatus(201))
    .catch((err) => {
      console.error(err);
      res.status(500).send('Error in post track query');
    });
};
