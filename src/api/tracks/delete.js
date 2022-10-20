const { mydb } = require('../../Cp3');

module.exports = (req, res) => {
  const id = parseInt(req.params.id, 10);
  mydb
    .query("DELETE from track where id=?", [id])
    .then(() => res.sendStatus(204))
    .catch((err) => {
      res.status(500).json('error in delete action', err);
    });
};
