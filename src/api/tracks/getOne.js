const database = require('../../database');

module.exports = (req, res) => {
  const { id } = req.params;

  database
    .query(`select * from track where id=?`, [id])
    .then(([result]) => {
      if (!result[0]) {
        return res.sendStatus(404);
      } else {
        return res.status(200).json(result[0]);
      }
    })
    .catch((err) => res.status(500).json(err));
};
