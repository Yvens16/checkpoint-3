const { sqldb } = require('../../../db');

module.exports = (req, res) => {
  // your code here !
  const { title, youtube_url } = req.body;
  sqldb
    .query(
      'INSERT INTO track ( title, youtube_url, id_album ) VALUES (?, ?, (SELECT id FROM album ORDER BY id DESC LIMIT 1))',
      [title, youtube_url]
    )
    .then(([result]) => {
      res.status(201).json({
        title: title,
        youtube_url: youtube_url,
        id_album: result.insertId,
        id: result.insertId,
      });
    })
};
