const database = require('../../database');
module.exports = (req, res) => {
  const { id } = req.params;
  database
    .query(
      `
    select * from album where id = ?
  `,
      [id]
    )
    .then(([album]) => res.status(200).json(album[0]))
    .catch((err) => {
      console.error(err);
      res.status(500).send('Error rin getOne album query');
    });
};
