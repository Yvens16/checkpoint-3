const { check3 } = require('../bd');
const deleteTrack = (req, res) => {
  const id = parseInt(req.params.id);
  check3
    .query('delete from track where id=?', [id])
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.status(404).json({ message: `track was not found in db` });
      } else {
        res
          .status(200)
          .json({ message: `track number: ${id} has been deleted` });
      }
    })
    .catch((err) => {
      res.status(500).send(`Error in postTrack ${err}`);
    });
};

module.exports = {
  deleteTrack,
};
