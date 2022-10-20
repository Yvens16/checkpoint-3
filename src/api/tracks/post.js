const { sqldb } = require('../../../db');

module.exports = (req, res) => {
  // your code here !
  const { title, youtube_url, id_album } = req.body;
  sqldb
    .query(
      'INSERT INTO track ( title, youtube_url, id_album ) VALUES (?, ?, ?)',
      [title, youtube_url, id_album]
    )
    .then(([results]) => {
      res.status(201).json(results);
      console.log(results);
    });
};
