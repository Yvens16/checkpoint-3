const database = require('../../database');

module.exports = (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  database
    .query(`update track set title=? where id=?`, [title, id])
    .then(([result]) => {
      if (result.affectedRows === 0) {
        return false;
      } else {
        return result.insertId;
      }
    })
    .then((insertId) =>
      database
        .query(`select * from track where id=?`, [insertId])
        .then(([result]) => res.status(204).json(result[0]))
    )
    .catch((err) => res.status(500).json(err));
};
