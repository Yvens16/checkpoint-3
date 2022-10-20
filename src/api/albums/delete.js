const { mydb } = require('../../Cp3');

module.exports = (req, res) => {
  const id = parseInt(req.params.id, 10);
  mydb
    .query(`delete from album where id = ?`,
      [id]
    )
    .then(() => res.sendStatus(204))
    .catch((err) => {
      console.error(err);
      res.status(500).send('Error for deleting album');
    });
};
