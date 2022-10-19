const { DB } = require('../../DB');

const deleteTrack = (req, res) => {
  const id = parseInt(req.params.id, 10);
  DB.query('DELETE from track where id=?', [id])
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.status(404).json('Not found in db');
      } else {
        res.status(200).json(`track number: ${id} has been deleted`);
      }
    })
    .catch((err) => {
      res.status(500).json('error in delete action', err);
    });
};

module.exports = { deleteTrack };
