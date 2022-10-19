const {checkpoint3 } = require('../../db');
module.exports = (req, res) => {
  const { title, youtubeUrl, idAlbum } = req.body;

  checkpoint3.query("UPDATE track SET title = ?, youtube_url = ? WHERE id_album = ?", [
    title,
    youtubeUrl,
    idAlbum,
  ])
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.status(404).json("not found");
      } else {
        res.jsonStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json("Error editing the album in database");
    });
  };
