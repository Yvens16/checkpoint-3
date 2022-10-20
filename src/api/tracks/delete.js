const { sqlDb } = require('../../db');

const deleteTrack = (req, res) => {
  const { id } = req.params;
  sqlDb
    .query('delete from track where id = ?', [id])
    .then(() => res.sendStatus(204))
    .catch((err) => {
      console.error(err);
      res.status(500).send('Error in delete track query');
    });
};

module.exports = {
  deleteTrack,
};
