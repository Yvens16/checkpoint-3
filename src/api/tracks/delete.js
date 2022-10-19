const { check3 } = require('../../bd');

module.exports = (req, res) => {
  const id = parseInt(req.params.id);
  check3
    .query(`delete from track where id=?`, [id])
    .then(() => res.sendStatus(204))
    .catch((err) => {
      res.status(500).send(`Error in postTrack ${err}`);
    });
};
