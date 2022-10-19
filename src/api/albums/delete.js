const database = require('../../database');
module.exports = (req, res) => {
  const { id } = req.params;

  database
    .query(
      `
  delete from album where id = ?
  `,
      [id]
    )
    .then(() => res.sendStatus(204))
    .catch((err) => {
      console.error(err);
      res.status(500).send('Error in delete album query');
    });
};
