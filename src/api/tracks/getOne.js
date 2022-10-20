const { sqlDB } = require('../../../db');

module.exports = (req, res) => {
  const id = parseInt(req.params.id);
  sqlDB
    .query('select * from track where id= ?', [id])
    .then(([track]) => {
      if (track[0] != null) {
        res.json(track[0]);
      } else {
        res.status(404).json({ message: 'No track found' });
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ message: 'error retrieving track' });
    });
};
