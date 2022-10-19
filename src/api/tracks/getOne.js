const database = require('../../database');
module.exports = (req, res) => {
  const { id } = req.params;
  database
    .query(
      `
    select * from track where id = ?
  `,
      [id]
    )
    .then(([track]) => {
      if (!track[0]) {
        return res.sendStatus(404);
      }
      res.status(200).json(track[0]);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Error rin getOne track query');
    });
};
