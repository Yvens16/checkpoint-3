const database = require('../../database');

module.exports = (req, res) => {
  const { id } = req.params;

  database
    .query(`delete from track where id=?`, [id])
    .then(() => res.sendStatus(204))
    .catch((err) => res.status(500).json(err));
};
