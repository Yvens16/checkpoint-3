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
    .then(([track]) => res.status(200).json(track[0]))
    .catch((err) => {
      console.error(err);
      res.status(500).send('Error getOne track query');
    });
};
