const { sqlDb } = require('../../db');

const deleteTrack = (req, res) => {
  const id = parseInt(req.params.id);
  sqlDb.query('delete from track where id = ?', [id]).then(([result]) => {
    if (result.affectedRows === 0) {
      res.status(404).json({ message: `track was not found in db` });
    } else {
      res.status(204).json({ message: `track number: ${id} has been deleted` });
    }
  });
};

module.exports = {
  deleteTrack,
};
