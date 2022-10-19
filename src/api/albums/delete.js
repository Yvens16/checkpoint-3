const { check3 } = require('../../bd');

module.exports = (req, res) => {
  const id = parseInt(req.params.id);
  check3
    .query(`delete from album where id=?`, [id])
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.status(404).json({ message: `album was not found in db` });
      } else {
        res
          .status(200)
          .json({ message: `album number: ${id} has been deleted` });
      }
    })
    .catch((err) => {
      res.status(500).json({
        message: `album number: ${id} was not deleted because of error, ${err}`,
      });
    });
};
